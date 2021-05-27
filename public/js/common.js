
$( document ).ready(function(){
    console.log("doc ready");

    $(".skipBtn a").click(function(){
      $("#typeWriter").addClass("slideOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
        setTimeout(() => {
            $("#typeWriter").addClass("slideOutUp animated").hide();
        }, 500);
        sessionStorage.setItem("visited", "true");

      });
    })

    const bgParticles = $(".bgParticles");
    
    // $('.skills1').marquee({
    //   speed: 100,
    //   gap: 500,
    //   delayBeforeStart: 0,
    //   direction: 'left',
    //   duplicated: true,
    //   pauseOnHover: true,
    //   startVisible:false

    // });
    // $('.skills2').marquee({
    //   speed: 100,
    //   gap: 500,
    //   delayBeforeStart: 0,
    //   direction: 'right',
    //   duplicated: true,
    //   pauseOnHover: true
    // });
    // $('.skills3').marquee({
    //   speed: 100,
    //   gap: 100,
    //   delayBeforeStart: 0,
    //   direction: 'left',
    //   duplicated: true,
    //   pauseOnHover: true
    // });


    $(".nav .menu ul li").each(function(){
      var targetA = $(this).children("a")
      var $textArray = targetA.text().split('');

      targetA.html("");

      for (var i = 0; i < $textArray.length; i++) {
        var letter = $("<span>"+$textArray[i]+"</span>");        
        letter.appendTo(targetA);
      }
    })

    $(".menuBtn").click(function(){
        var menuState = $(".menu").hasClass("on");

        console.log(menuState);
        
        if(menuState){
            closeMenu()
        }else{
            openMenu()
        }

        
    })
    function openMenu() {
      console.log("open menu")

      $(".menuBtn").addClass("on");
      $(".menu").css("display", "flex").addClass("slideInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
          $(".menu").removeClass("slideInLeft animated");
      });
      $(".menu").addClass("on");

      $(".main").css("opacity", "0");
      // if ($("#menuParticles").children().length==0) {
      //   particlesJS.load('menuParticles', menuParticlesParam);
        
      // }
      
    }

    function closeMenu() {
      $(".main").css("opacity", "1");

        console.log("close menu");
        $(".menuBtn").removeClass("on");

        $(".menu").addClass("slideOutRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
            $(".menu").removeClass("slideOutRight animated").hide();
        });
        
        $(".menu").removeClass("on");
    }

    var homeParticlesParam = {
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#000000"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 2,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/download.png",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    }

    var particlesParam = {
        "particles": {
          "number": {
            "value": 120,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": ""
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/download.png",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    }

    var vectorParam = {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#14ffec"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#14ffec"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#14ffec",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    }

    var menuParticlesParam = {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": ""
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/download.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 300,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }


    // particlesJS.load('particles', particlesParam);
    // particlesJS.load('vector1', vectorParam);
    // particlesJS.load('vector2',  vectorParam);
    // particlesJS.load('vector3', vectorParam);
    // particlesJS.load('vector4',  vectorParam);
    // particlesJS.load('vector5', vectorParam);
    // particlesJS.load('vector6', vectorParam);
    // particlesJS.load('vector7',  vectorParam);
    // particlesJS.load('vector8', vectorParam);
    // particlesJS.load('vector9',  vectorParam);
    // particlesJS.load('vector10', vectorParam);


    // particlesJS.load('particles', 'assets/particles.json', function() {
        
    //     console.log('callback - particles.js config loaded');
    // });

    $(".menu ul li a").click(function(){
        window.loadPromise = new Promise(function(resolve) {
            window.addEventListener("load", resolve);
        });
        closeMenu();

    })

    // $(".projectFancyLink").fancybox({
    // });

    $(".iccFancyLink").click(function(){
      $.fancybox.open(
        [
          {
            src  : "/img/projects/icc/index.jpg",
            opts : {
              caption : "A multiligual responsive website developed for ICC which meets the W3C WCAG 2.0Level AA standard. It is awaiting for final confirmation for deployment."
            }
          },
          {
            src  : "/img/projects/icc/news.jpg",
            opts : {
              caption : "The 'News' page which is generated using data retrieve from the backend via Ajax, also allows users to filter the news by the year.",
            }
          },
          {
            src  : "/img/projects/icc/album_listing.jpg",
            opts : {
              caption : "The 'Photo Album' listing page which is generated from back-end data, with 'Load More' button that uses Ajax to load additional albums.",
            }
          },
          {
            src  : "/img/projects/icc/album_detail.jpg",
            opts : {
              caption : "The 'Photo Album' detail page with pagination.",
            }
          },
          {
            src  : "/img/projects/icc/visitor_form.jpg",
            opts : {
              caption : "The 'Form' page that uses Ajax to pass submitted data to the back-end. ",
            }
          }
        ], {
          loop : true
      });
    })

    $(".vwalkFancyLink").click(function(){
      $.fancybox.open(
        [
          {
            src  : "/img/projects/vwalk/img2.png",
            opts : {
              caption : "For this project, I developed multiple static displays for the Vwalk Shopping Mall outdoor display panels."
            }
          },
          {
            src  : "/img/projects/vwalk/img1.png",
            opts : {
              caption : "This is the horizontal 4k display panel, the left side of the panel shows the food guide which included the opening hours and location of the restaurants, it retrieves data from the Sun Hung Kai API and updates the current status of the restaurants. The right side shows the movie show times and real-time ticket availability for each show time using the data for the Golden Havest API.",
            }
          },
          {
            src  : "/img/projects/vwalk/img3.png",
            opts : {
              caption : "This is the horizontal food guide only display which loops through currently opened restaurants"
            }
          },
          {
            src  : "/img/projects/vwalk/img4.png",
            opts : {
              caption : "This is the vertical food guide only display which loops through currently opened restaurants"
            }
          }
        ], {
          loop : true
      });
    })

    // $(".menu ul li").click(function(){
    //     $( document ).ready(function() {
    //         particlesJS.load('particles', homeParticlesParam);

    //     })
    //     // $(".loadingLogoWrap").show();
    //     $(".loadingLogo").addClass("fadeIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
    //         $(".loadingLogo").removeClass("fadeIn animated");
    //     });
    
    //     $(".loadingLogoWrap").css("display", "block").css({"left": "0"});

    //     setTimeout(() => {
    //         $(".loadingLogo").addClass("fadeOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
    //             $(this).removeClass("fadeOut animated");
    //         });
    //         $(".loadingLogoWrap").css({"left": "100%"});


    //         setTimeout(() => {
    //             $(".loadingLogoWrap").hide().css({"left": "-105%"});

                
    //         }, 500);
    //     }, 2500);

    // });    


    /******************** Cursor Effect ********************/
    // set the starting position of the cursor outside of the screen
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor--small");

    const initCursor = () => {
      // add listener to track the current mouse position
      document.addEventListener("mousemove", e => {
          clientX = e.clientX;
          clientY = e.clientY;
      });
      
      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
          innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
          // if you are already using TweenMax in your project, you might as well
          // use TweenMax.set() instead
          // TweenMax.set(innerCursor, {
          //   x: clientX,
          //   y: clientY
          // });
          
          requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();

    let lastX = 0;
    let lastY = 0;
    let isStuck = false;
    let showCursor = false;
    let group, stuckX, stuckY, fillOuterCursor;
    const canvas = document.querySelector(".cursor--canvas");
      const shapeBounds = {
          width: 75,
          height: 75
      };
      paper.setup(canvas);
      const strokeColor = "rgba(195, 198, 199, 0.5)";
      const strokeWidth = 1;
      const segments = 8;
      const radius = 15;
      
      // we'll need these later for the noisy circle
      const noiseScale = 150; // speed
      const noiseRange = 4; // range of distortion
      let isNoisy = false; // state
      
      // the base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(
          new paper.Point(0, 0),
          segments,
          radius
    );
    
    const initCanvas = () => {
        
        polygon.strokeColor = strokeColor;
        polygon.strokeWidth = strokeWidth;
        polygon.smooth();

        group = new paper.Group([polygon]);
        group.applyMatrix = false;
        
        const noiseObjects = polygon.segments.map(() => new SimplexNoise());
        let bigCoordinates = [];
        
        // function for linear interpolation of values
        const lerp = (a, b, n) => {
            return (1 - n) * a + n * b;
        };
        
        // function to map a value from one range to another range
        const map = (value, in_min, in_max, out_min, out_max) => {
            return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
            );
        };
        
        // the draw loop of Paper.js 
        // (60fps with requestAnimationFrame under the hood)
        // the draw loop of Paper.js
        // (60fps with requestAnimationFrame under the hood)
        paper.view.onFrame = event => {
            // using linear interpolation, the circle will move 0.2 (20%)
            // of the distance between its current position and the mouse
            // coordinates per Frame
            if (!isStuck) {
            // move circle around normally
              lastX = lerp(lastX, clientX, 0.2);
              lastY = lerp(lastY, clientY, 0.2);
              group.position = new paper.Point(lastX, lastY);
            } else if (isStuck) {
            // fixed position on a nav item
              lastX = lerp(lastX, stuckX, 0.2);
              lastY = lerp(lastY, stuckY, 0.2);
              group.position = new paper.Point(lastX, lastY);
            }
            
            if (isStuck && polygon.bounds.width < shapeBounds.width) { 
              // scale up the shape 
              polygon.scale(1.2);
            } else if (!isStuck && polygon.bounds.width > 30) {
              // remove noise
              if (isNoisy) {
                  polygon.segments.forEach((segment, i) => {
                  segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
                  });
                  isNoisy = false;
                  bigCoordinates = [];
              }
              // scale down the shape
              const scaleDown = 0.92;
              polygon.scale(scaleDown);
            }
            
            // while stuck and big, apply simplex noise
            if (isStuck && polygon.bounds.width >= shapeBounds.width) {
            isNoisy = true;
            // first get coordinates of large circle
            if (bigCoordinates.length === 0) {
                polygon.segments.forEach((segment, i) => {
                bigCoordinates[i] = [segment.point.x, segment.point.y];
                });
            }
            
            // loop over all points of the polygon
            polygon.segments.forEach((segment, i) => {
                
                // get new noise value
                // we divide event.count by noiseScale to get a very smooth value
                const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
                const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
                
                // map the noise value to our defined range
                const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
                const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
                
                // apply distortion to coordinates
                const newX = bigCoordinates[i][0] + distortionX;
                const newY = bigCoordinates[i][1] + distortionY;
                
                // set new (noisy) coodrindate of point
                segment.point.set(newX, newY);
            });
            
            }
            // hover state for main nav items
            if (this.fillOuterCursor && polygon.fillColor !== strokeColor) {
              polygon.fillColor = strokeColor;
              polygon.strokeColor = "transparent";
              polygon.blendMode = 'difference';

            } else if (!this.fillOuterCursor && polygon.fillColor !== "transparent") {
              polygon.strokeColor = "rgba(195, 198, 199, 0.5)";
              polygon.fillColor = "transparent";
              // polygon.scale(1);

            }
            polygon.smooth();
        };
    }
    
    initCanvas();

    const initHovers = () => {

        const handleMouseEnter = e => {
          const navItem = e.currentTarget;
          const navItemBox = navItem.getBoundingClientRect();
          stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
          stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
          this.fillOuterCursor = true;
          $(".cursor--small .clickText").css({
            "font-size": "14px",
          })
          
          isStuck = true;
        };
        
        const handleMouseLeave = () => {
          this.fillOuterCursor = false;

          $(".cursor--small .clickText").css({
            "font-size": "0",
          })
          isStuck = false;
        };

        const linkItems = document.querySelectorAll(".clickItem");
        linkItems.forEach(item => {
          item.addEventListener("mouseenter", handleMouseEnter);
          item.addEventListener("mouseleave", handleMouseLeave);
        });
        
        // find the center of the link element and set stuckX and stuckY
        // these are needed to set the position of the noisy circle
        const handleLogoMouseEnter = e => {
          const navItem = e.currentTarget;
          const navItemBox = navItem.getBoundingClientRect();
          stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
          stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
          this.fillOuterCursor = true;
          $(".cursor--small .dragText").css({
            "font-size": "14px",
          })
          isStuck = true;
        };
        
        // reset isStuck on mouseLeave
        const handleLogoMouseLeave = () => {
          this.fillOuterCursor = false;

          $(".cursor--small .dragText").css({
            "font-size": "0",
          })
          isStuck = false;
        };
        
        // add event listeners to all items
        const indexLogo = document.querySelectorAll(".indexLogoDrag");
        indexLogo.forEach(item => {
          item.addEventListener("mouseenter", handleLogoMouseEnter);
          item.addEventListener("mouseleave", handleLogoMouseLeave);
        });
    };
    
    initHovers();

    /******************** End of Cursor Effect ********************/
    
    $(window).on('load', function() {
        console.log("win load");

        const scroll = new LocomotiveScroll();
        const target = document.querySelector('.main');
        
        // scroll.scrollTo(target);
        // Animate loader off screen
        // $(".loadingLogoWrap").hide();

    });
})