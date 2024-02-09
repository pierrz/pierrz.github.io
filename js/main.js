/* 
Script handling how the main components behave
*/

const maxWidth = 768;


// ENABLED (or not) GRID
function loadOrUnloadScript() {
  
  const scriptId = 'gridScript',
        existingScript = document.getElementById(scriptId);

  if (window.innerWidth < maxWidth) {
    // If the window is smaller than maxWidth and the script exists, remove it
    if (existingScript) {
      existingScript.remove();
    }
  } 
  else {
    // If the window is wider than maxWidth and the script does not already exist, add it
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = 'js/grid.js';
      document.body.appendChild(script);
    }
  }
};

loadOrUnloadScript();                                     // Run when the page loads
window.addEventListener('resize', loadOrUnloadScript);    // Re-check whenever the window is resized


// BIO CONTENT
// issue in mobile (white overlay, all is invisible) related to section size/height probably
fetch('./html/bio.html')
.then(response => response.text())
.then(data => {
    document.getElementById('bio-content').innerHTML = data;
});


// MODERNIZR DISABLES SKROLLR IF TOUCHSCREEN
if (!Modernizr.touch) {
  skrollr.init();
}


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
    timeout: false,
    timeoutCountdown: 5000,
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


// SCROLLIT TRIGGER 
$(function(){
  
  // desktop
  if (window.innerWidth > maxWidth) {
    const bioTag = document.getElementById('bio');
    bioTag.setAttribute('data-scroll-index', '2');
    $.scrollIt({
      topOffset: -1     // hack to trigger on the last nav (technically, it should be -110)
    });
  }

  // mobile
  else {
    const bioTag = document.getElementById('bio-content');
    bioTag.setAttribute('data-scroll-index', '2');
    $.scrollIt({
      topOffset: -50     // hack to trigger on the last nav (technically, it should be -110)
    });
  }

});
