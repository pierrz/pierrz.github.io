/**
 * animateHover.js
 * http://www.pierrz.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Pierre-Edouard Barrault
 * http://www.pierrz.com
 */
		

          //BIO ICONS - ANIMATE
          $(function animateHover(){
              
              //Data
              var format_bio = {
                                // mask: {css: "hidden"}, 
                                ux: { css: "jello" },
                                ia: { css: "bounce" },
                                ixd: { css: "flash" }
                              },
                  imgMask = $( "#img-mask" );

              // Main overlay UI
              jQuery.each(format_bio, function(id_bio, info) {

                    var spanBio = $( "#span-" + id_bio ),
                        imgBio = $( "#img-" + id_bio ),
                        classBio = "animated infinite " + info.css;

                    $( imgBio ).css( {"opacity": "0"} );
                    $( imgMask ).css({ "opacity": "1",
                                    "-webkit-filter": "blur(5px)",
                                    "filter:": "blur(5px)"});

                    $( spanBio ).mouseover(function() {
                        $( imgMask ).css({ "opacity": "0" });
                        $( imgBio ).css({ "opacity": "1" });
                    });
                    $( spanBio ).mouseout(function() {
                        $( imgBio ).css( {"opacity": "0"} );
                        $( imgMask ).css({ "opacity": "1" });
                    });

                    // Highlighter UI
                    // var entry = data[Math.floor(Math.random()*data.length)];
                    //Mouse Over cell
                    $( imgMask ).mouseover(function() {
                            $( spanBio ).addClass( classBio );
                    });

                    //Mouse Out cell
                    $( imgMask ).mouseout(function() {
                          $( spanBio ).removeClass( classBio );
                    });
              });

                  // Highlighter UI
                    //Mouse Over cell
                    // var classes = "animated infinite jello";
                    // $( imgMask ).mouseover(function() {
                    //         $( "#span-ux" ).addClass( classes );
                    // });

                    // //Mouse Out cell
                    // $( imgMask ).mouseout(function() {
                    //       $( "#span-ux" ).removeClass( classes );
                    // });

          });