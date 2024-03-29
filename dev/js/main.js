/* 
Script handling how the main components behave
*/


// Asynchronous function getting the html content for the 'Bio' section
async function fetchHtml() {
    try {
        const response = await fetch('../html/bio.html'),
            htmlContent = await response.text();
        return htmlContent;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}


// MODERNIZR (desktop/mobile subtleties)
// calls fetchHtml 1st to work on the complete DOM
fetchHtml().then( htmlContent => {

    document.getElementById('bio-content').innerHTML = htmlContent;
    const furtherTag = document.getElementById('span_further');

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
        furtherTag.setAttribute('data-scroll-goto', '4');
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
        furtherTag.setAttribute('data-scroll-goto', '3');
        $.scrollIt({
            topOffset: -55
        });
    };

});


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
