// Asynchronous function getting the grid parameters data
async function fetchData() {
    try {
        const response = await fetch('./assets/backgrounds/grid_parameters.json');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Grid creation funtion, calling fetchData 1st and then using its data
fetchData().then(format_data => {
    if (format_data) {

        //Main variables                            
        var baseUrl = "assets/backgrounds/",
            jpgExtension = ".jpg",
            desktop_baseUrl = baseUrl + "desk/",
            // mob_baseUrl = baseUrl + "mob/",
            baseZindex = 1000;

        jQuery.each(format_data, function(id_val, format) {
            
            //Picture dimensions/position/elements
            var widthWindow = window.innerWidth * 1.1,
                heightWindow = window.innerHeight * 1.1,
                pos_left = -(format.pos_left - 1) * widthWindow/3 - format.offset_left,
                pos_top = -(format.pos_top - 1) * heightWindow/3 - format.offset_top,
                element = $( "#" + id_val + ".gridCell" ),
                picture = desktop_baseUrl + format.filename + jpgExtension,

            //Meta = Children elements
                title = format.title,
                credits = format.artist + ', ' + format.date,
                type = format.type,
                subject = format.mainTopic,
                institution = format.institution,
                source = "http://www.europeana.eu/portal/en/record" + format.europeanaId + ".html",

            //Inserted HTML elements
                // type tag is disabled via CSS due to readibility concerns
                elem_pic = "<img src=" + picture + ">",
                elem_link = "<div class='link'><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a><div class='meta'><p class='title'><span>Inspiration :</span> " + title + " <span>(" + credits + ")</span></p><p class='type'>" + type + " related to " + subject + "</p><p class='source'>From the " + institution + ", via <a class='source' href='" + source + "' target='_blank'>Europeana</a></div></div>",
                elem_link_min = "<div class='link link_min'><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a><div class='meta'><p class='title'>" + title + "</p></div></div>",
                elem_link_mobile = "<li id=li_" + id_val + "><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a></li>",
                elem_question = "<div class='link'><a><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a><div class='meta'><p class='title'>" + title + "</p></div></div>";
            
            // DESKTOP only
            if (!Modernizr.touch) {
            
                //Create Cell "background"
                if (
                    id_val == "sk_github"
                    || id_val == "sk_insta"
                    || id_val == "sk_500px"
                    || id_val == "sk_linkedin"
                    || id_val == "sk_resume"
                    || id_val == "sk_mail"
                    || id_val == "sk_behance"
                    || id_val == "sk_muzai"
                    // || id_val == "sk_flickr"
                    // || id_val == "sk_twitter"
                    ) {
                        $( element ).append( elem_pic )
                            .find( "img" ).css({  "width": widthWindow,
                                                    "height": "auto",
                                                    "left": pos_left,
                                                    "top": pos_top,
                                                    "z-index": baseZindex + 10 });
                } 
                else {    
                }
                
                //Create Cell meta
                if (
                    id_val == "sk_insta"
                    || id_val == "sk_500px"
                    || id_val == "sk_muzai"
                    // || id_val == "sk_flickr"
                    ) {
                        $( element ).append( elem_link_min );
                } else if (id_val == "sk_question") {
                    $( element ).append( elem_question );
                } else {
                    $( element ).append( elem_link );
                };
                
                //Set fullsize for 1st "a" children for each cell (need the connected CSS side)
                $( ".link" ).css({ 'z-index': baseZindex + 30 });
                var cellHeight = $( element ).parent( ".row" ).height();
                $( element ).find( ".link" ).css({"height": cellHeight });

                //Mouse Over cell
                $( element ).mouseover(function() {
                        $( this ).find( "img" ).css({ 'z-index': baseZindex + 20 })
                });

                //Mouse Out cell
                $( element ).mouseout(function() {
                        $( this ).find( "img" ).css({ 'z-index': baseZindex + 10 })
                });
            }

            // MOBILE only
            else {
                // Left column
                if (
                    id_val == "sk_resume"
                    || id_val == "sk_mail"
                    || id_val == "sk_github"
                    || id_val == "sk_insta"
                    ) {
                        $( "#bio ul.icon-list-left" ).append( elem_link_mobile );
                }
                // Right column
                else if (
                    id_val == "sk_linkedin"
                    || id_val == "sk_muzai"
                    || id_val == "sk_behance"
                    || id_val == "sk_500px"
                    ) {
                        $( "#bio ul.icon-list-right" ).append( elem_link_mobile );
                }
                else {
                }
            };

        });

    } else {
        console.log("Error with the grid parameters data.");
    }
}).catch(error => {
    console.error("Error fetching data: ", error);
});
