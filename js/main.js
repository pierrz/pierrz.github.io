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
    const menuButton = document.querySelector('.menu-button'),
            landingSection = document.getElementById('landing'),
            bioSection = document.getElementById('bio'),
            gridSection = document.getElementById('grid');
    
    // Get the position of the section
    const landingTop = landingSection.offsetTop,
            landingBottom = landingTop + landingSection.offsetHeight,
            bioTop = bioSection.offsetTop,
            bioBottom = bioTop + bioSection.offsetHeight,
            gridTop = gridSection.offsetTop,
            gridBottom = gridTop + gridSection.offsetHeight;
    
    // Get the scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Check if the specialSection has completely left the viewport
    if (scrollPosition + window.innerHeight >= bioTop && scrollPosition < bioBottom) {
      // Add class to change color
      menuButton.style.color = "var(--klr_shade1)"
    } 
    else if (scrollPosition + window.innerHeight > gridTop) {
      // Remove class to revert color
      menuButton.style.color = "var(--klr_bkgrnd)"
    }
  });
  