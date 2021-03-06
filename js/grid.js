/**
 * grid.js
 * http://www.pierrz.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Pierre-Edouard Barrault
 * http://www.pierrz.com
 */
  
// DATA
$(function grid(){

    //Main variables                            
    var baseUrl = "src/backgrounds/",
        jpgExtension = ".jpg",
        desktop_baseUrl = baseUrl + "desk/",
        mob_baseUrl = baseUrl + "mob/",
        ZindexZ = 1000;

    //Data
    var format_data = {sk_twitter: {
                            pos_left: "1",
                            pos_top: "1",
                            offset_left: "70",
                            offset_top: "200",
                            label: "Twitter",
                            uri: "https://twitter.com/pierrzb/",
                            icon: "fa-twitter",
                            europeanaId: "/90402/SK_A_4",
                            title: "The Threatened Swan",
                            artist: "Jan Asselijn",
                            date: "1650",
                            type: "Easel painting",
                            mainTopic: "Natural history",
                            institution: "Rijksmuseum",
                            lgFile: desktop_baseUrl + "sk_twitter" + jpgExtension,
                            smFile: mob_baseUrl + "sk_twitter" + jpgExtension
                        },
                        sk_linkedin: {
                            pos_left: "2",
                            pos_top: "1",
                            offset_left: "70",
                            offset_top: "250",
                            label: "Linkedin",
                            uri: "https://www.linkedin.com/in/pierreedouardbarrault/en",
                            icon: "fa-linkedin",
                            europeanaId: "/2058626/locloud_flickr_6432099557",
                            title: "Favorittbilde #15. Ukas bilde / Photo of the week 48/2011",
                            artist: "Unknown",
                            date: "Oslo, 1882",
                            type: "Photograph",
                            mainTopic: "Street photography",
                            institution: "The National Archives Of Norway ",
                            lgFile: desktop_baseUrl + "sk_linkedin" + jpgExtension,
                            smFile: mob_baseUrl + "sk_linkedin" + jpgExtension
                        },
                        sk_mail: {
                            pos_left: "3",
                            pos_top: "1",
                            offset_left: "10",
                            offset_top: "50",
                            label: "Mail",
                            uri: "mailto:pe.barrault@gmail.com",
                            icon: "fa-envelope",
                            europeanaId: "/916118/S_TEK_photo_TEKA0006913",
                            title: "The Centurion, 200 m.p.h. flying boat carrying a ton and half of mail, took off from Southhampton for Durban to inaugurate a new Empire air mail service.",
                            artist: "Okänd",
                            date: "1937-06-29",
                            type: "Photograph",
                            mainTopic: "Mail and seaplanes",
                            institution: "Tekniska museet",
                            lgFile: desktop_baseUrl + "sk_mail" + jpgExtension,
                            smFile: mob_baseUrl + "sk_mail" + jpgExtension
                        },
                        sk_behance: {
                            pos_left: "1",
                            pos_top: "2",
                            offset_left: "70",
                            offset_top: "350",
                            label: "Behance",
                            uri: "https://behance.net/pierrz/",
                            icon: "fa-behance",
                            europeanaId: "/2063605/LAT_280_006",
                            title: "Refugees",
                            artist: "Jēkabs Kazaks",
                            date: "1917",
                            type: "Oil on canvas",
                            mainTopic: "Immigration",
                            institution: "Latvijas Nacionālais mākslas muzejs",
                            lgFile: desktop_baseUrl + "sk_behance" + jpgExtension,
                            smFile: mob_baseUrl + "sk_behance" + jpgExtension
                        },
                        sk_github: {
                            pos_left: "2",
                            pos_top: "2",
                            offset_left: "70",
                            offset_top: "350",
                            label: "Github",
                            uri: "https://github.com/pierrz",
                            icon: "fa-github",
                            europeanaId: "/2063607/EST_280_003",
                            title: "Singing Tree",
                            artist: "Raul Meel",
                            date: "1970-1990",
                            type: "Typewriting",
                            mainTopic: "Concrete poetry",
                            institution: "Eesti Kunstimuuseum",
                            lgFile: desktop_baseUrl + "sk_github" + jpgExtension,
                            smFile: mob_baseUrl + "sk_github" + jpgExtension
                        },
                        sk_500px: {
                            pos_left: "3",
                            pos_top: "2",
                            offset_left: "10",
                            offset_top: "80",
                            label: "500PX",
                            uri: "https://500px.com/pierrz/",
                            icon: "fa-500px",
                            europeanaId: "",
                            title: "In front of the Guggenheim Museum, NYC",
                            artist: "",
                            date: "",
                            type: "",
                            mainTopic: "",
                            institution: "",
                            lgFile: desktop_baseUrl + "sk_500px" + jpgExtension,
                            smFile: mob_baseUrl + "sk_500px" + jpgExtension
                        },
                        sk_inst: {
                            pos_left: "1",
                            pos_top: "3",
                            offset_left: "70",
                            offset_top: "50",
                            label: "Instagram",
                            uri: "https://instagram.com/pierr_z/",
                            icon: "fa-instagram",
                            europeanaId: "",
                            title: "<span>Dialogue</span> - Palay Royal, Paris, 2015",
                            artist: "",
                            date: "",
                            type: "",
                            mainTopic: "",
                            institution: "",
                            lgFile: desktop_baseUrl + "sk_inst" + jpgExtension,
                            smFile: mob_baseUrl + "sk_inst" + jpgExtension
                        },
                        sk_flickr: {
                            pos_left: "2",
                            pos_top: "3",
                            offset_left: "70",
                            offset_top: "40",
                            label: "Flickr",
                            uri: "https://www.flickr.com/photos/138297635@N06/",
                            icon: "fa-flickr",
                            europeanaId: "",
                            title: "This picture was taken in Portugal.<br>See more pictures of this serie <a href='https://www.flickr.com/photos/138297635@N06/albums' target='_blank'>here</a>.",
                            artist: "",
                            date: "",
                            type: "",
                            mainTopic: "",
                            institution: "",
                            lgFile: desktop_baseUrl + "sk_flickr" + jpgExtension,
                            smFile: mob_baseUrl + "sk_flickr" + jpgExtension
                        },
                        sk_question: {
                            pos_left: "3",
                            pos_top: "3",
                            offset_left: "70",
                            offset_top: "250",
                            label: "What is this ?",
                            uri: "#",
                            icon: "fa-question-circle-o",
                            europeanaId: "http://www.europeana.eu/portal/en/record/15802/eDipRouteurBML_eDipRouteurBML_aspx_Application_ESTA_26Action_RechercherDirectement_NUID___4083__ESTA_3BAfficherVueSurEnregistrement_Vue_Fiche_Principal_3BAfficherFrameset.html",
                            title: "This UI is mixing my own photographs and (free to re-use) artworks from Europeana Collections, with the idea of a hub linked to my interests and online identities.<br>This website also displays 3 icons from <a href='https://thenounproject.com/geremygood' target='_blank'>Jeremy&nbsp;Good</a> and 1 from <a href='https://thenounproject.com/alexfuller/' target='_blank'>Alex&nbsp;Fuller</a>, and the top section display a print from <a href='http://www.europeana.eu/portal/en/record/15802/eDipRouteurBML_eDipRouteurBML_aspx_Application_ESTA_26Action_RechercherDirectement_NUID___4083__ESTA_3BAfficherVueSurEnregistrement_Vue_Fiche_Principal_3BAfficherFrameset.html' target='_blank'>René&nbsp;Bord</a> (Courtesy: Bibliothèque Municipale De Lyon)",
                            artist: "René Bord",
                            date: "1930",
                            type: "Print",
                            mainTopic: "Time",
                            institution: "Bibliothèque Municipale De Lyon",
                            lgFile: desktop_baseUrl + "sk_question" + jpgExtension,
                            smFile: mob_baseUrl + "sk_question" + jpgExtension
                        }
                      };

    //Loop for each Cells
    jQuery.each(format_data, function(id_val, format) {
      
          //Picture dimensions/position
          var widthWindow = window.innerWidth * 1.1,
              heightWindow = window.innerHeight * 1.1,
              pos_left = -(format.pos_left - 1) * widthWindow/3 - format.offset_left,
              pos_top = -(format.pos_top - 1) * heightWindow/3 - format.offset_top,



          //Cells & Pictures
              element = $( "#" + id_val + ".gridCell" ),
              picture = format.lgFile,   

          //Meta = Children elemnts
              title = format.title,
              credits = format.artist + ', ' + format.date,
              type = format.type,
              subject = format.mainTopic,
              institution = format.institution,
              source = "http://www.europeana.eu/portal/en/record" + format.europeanaId + ".html",

          //Inserted HTML elements
              url_pic = "url('" + picture + "')",
              elem_pic = "<img src=" + picture + ">",
              elem_link = "<div class='link'><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a><div class='meta'><p class='title'><span>Inspiration :</span> " + title + " <span>(" + credits + ")</span></p><p class='type'>" + type + " related to " + subject + "</p><p class='source'>From the " + institution + ", via <a class='source' href='" + source + "' target='_blank'>Europeana</a></div></div>",
              elem_link_min = "<div class='link link_min'><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a><div class='meta'><p class='type' style='text-align:center'>" + title + "</p></div></div>",
              elem_link_mobile = "<li id=li_" + id_val + "><a href='" + format.uri + "' target='_blank'><i class='fa " + format.icon + " fa-3x'></i><h4>" + format.label + "</h4></a></li>";

          //Create Cell "background"
          if (id_val == "sk_github" || id_val == "sk_flickr"|| id_val == "sk_inst"|| id_val == "sk_500px" || id_val == "sk_linkedin" || id_val == "sk_twitter"|| id_val == "sk_mail"|| id_val == "sk_behance") {
              $( element ).append( elem_pic )
                      .find( "img" ).css({  "width": widthWindow,
                                            "height": "auto",
                                            "left": pos_left,
                                            "top": pos_top,
                                            "z-index": ZindexZ + 10 });
          } 
          else {    
          }
          //Create Cell meta
          if (id_val == "sk_question" || id_val == "sk_flickr"|| id_val == "sk_inst"|| id_val == "sk_500px") {
              $( element ).append( elem_link_min );
          } else {
              $( element ).append( elem_link );
          };
          $( ".link" ).css({ 'z-index': ZindexZ + 30 });


          //Create Cell meta MOBILE
          if (id_val == "sk_twitter" || id_val == "sk_github"|| id_val == "sk_mail"|| id_val == "sk_inst") {
              $( "#bio ul.icon-list-left" ).append( elem_link_mobile );
          }
          else if (id_val == "sk_linkedin" || id_val == "sk_flickr"|| id_val == "sk_500px"|| id_val == "sk_behance") {
            // else {
              $( "#bio ul.icon-list-right" ).append( elem_link_mobile );
          }
          else {
          };

          //Set fullsize for 1st "a" children for each cell (need the connected CSS side)
          var cellHeight = $( element ).parent( ".row" ).height();
          $( element ).find( ".link" ).css({"height": cellHeight });

          //Mouse Over cell
          $( element ).mouseover(function() {
                  $( this ).find( "img" ).css({ 'z-index': ZindexZ + 20 })
          });

          //Mouse Out cell
          $( element ).mouseout(function() {
                $( this ).find( "img" ).css({ 'z-index': ZindexZ + 10 })
          });
    });
});