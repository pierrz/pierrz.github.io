/* 
Script handling how the main components behave
*/

// BIO CONTENT
fetch('./html/bio.html')
.then(response => response.text())
.then(data => {
    document.getElementById('bio-content').innerHTML = data;
});


// MODERNIZR (mobile/desktop subtleties)
if (!Modernizr.touch) {
  
    // Skrollr
    const skrollrCss = document.createElement('link');
    skrollrCss.type = 'text/css';
    skrollrCss.rel = 'stylesheet';
    skrollrCss.href = 'css/style_skrollr.css';
    document.head.appendChild(skrollrCss);
    skrollr.init();

    // ScrollIt
    const bioTag = document.getElementById('bio');
    bioTag.setAttribute('data-scroll-index', '2');
    $.scrollIt({
      topOffset: -1     // hack to trigger on the last nav (technically, it should be -110)
    });

}
else {
    //CSS styling for touch-screens
    const touchCss = document.createElement('link');
    touchCss.type = 'text/css';
    touchCss.rel = 'stylesheet';
    touchCss.href = 'css/style_touch.css';
    document.head.appendChild(touchCss);

    // ScrollIt
    const bioTag = document.getElementById('bio-content');
    bioTag.setAttribute('data-scroll-index', '2');
    $.scrollIt({
      topOffset: -55
    });
};


// ANIMSITION PARAMETERS
$(document).ready(function() {
    $(".animsition").animsition({
        // Transition Type
        inClass: 'fade-in',
        outClass: 'fade-out',

        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: true,
        timeoutCountdown: 2500,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});


window.addEventListener('scroll', function() {
    // html elements
    const menuButton = document.querySelector('.menu-button'),
            logo = document.getElementById('logo').getElementsByTagName('a')[0],
            landingSection = document.getElementById('landing'),
            bioSection = document.getElementById('bio'),
            gridSection = document.getElementById('grid');
    
    // scrolled positions
    const landingTop = landingSection.offsetTop,
            landingBottom = landingTop + landingSection.offsetHeight,
            bioTop = bioSection.offsetTop,
            bioBottom = bioTop + bioSection.offsetHeight,
            gridTop = gridSection.offsetTop,
            gridBottom = gridTop + gridSection.offsetHeight,
            scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    menuButton.classList.add('default_top');
    logo.classList.add('default_top');
    // change stying only for bio section
    if (scrollPosition >= bioTop && scrollPosition <= bioBottom ) {
      menuButton.classList.remove('default_top');
      logo.classList.remove('default_top');
      menuButton.classList.add('tuned_top');
      logo.classList.add('tuned_top');
      // menuButton.style.color = "var(--klr_shade3)"
      // logo.style.color = "var(--klr_shade3)"

    //   menuButton.addEventListener('mouseenter', function() {
    //     this.style.color = "";
    //   });
    //   logo.addEventListener('mouseenter', function() {
    //     this.style.color = "";
    //   });
      // menuButton.addEventListener('mouseleave', function() {
      //   this.classList.remove('hovered');
      //   // this.style.color = "var(--klr_shade3)";
      // });
      // logo.addEventListener('mouseleave', function() {
      //   this.classList.remove('hovered');
      //   // this.style.color = "var(--klr_shade3)";
      // });
    
    } 
    // else {
    //   menuButton.style.color = "var(--klr_bkgrnd)"
    //   logo.style.color = "var(--klr_bkgrnd)"
    //   menuButton.addEventListener('mouseleave', function() {
    //     this.classList.remove('hovered');
    //     // this.style.color = "var(--klr_bkgrnd)";
    //     });
    //     logo.addEventListener('mouseleave', function() {
    //       this.classList.remove('hovered');
    //         // this.style.color = "var(--klr_bkgrnd)";
    //     });
    // }

    menuButton.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    logo.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    menuButton.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
    logo.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
    // menuButton.addEventListener('mouseleave', function() {
    //     this.style.color = "var(--klr_shade3)";
    // });
    // logo.addEventListener('mouseleave', function() {
    //     this.style.color = "var(--klr_shade3)";
    // });
    
    // logo disapears below bio section
    if (scrollPosition >= bioBottom ) {
        logo.style.display = "none"
    }
    else {
        logo.style.display = ""
    }

  });
  