/* 
Script handling how the main components behave
*/

// const maxWidth = 768;


// ENABLED (or not) GRID
// function loadOrUnloadScript() {
  
//   const scriptId = 'gridScript',
//         existingScript = document.getElementById(scriptId);

//   if (window.innerWidth < maxWidth) {
//     // If the window is smaller than maxWidth and the script exists, remove it
//     if (existingScript) {
//       existingScript.remove();
//     }
//   } 
//   else {
//     // If the window is wider than maxWidth and the script does not already exist, add it
//     if (!existingScript) {
//       const script = document.createElement('script');
//       script.id = scriptId;
//       script.type = 'text/javascript';
//       script.src = 'js/grid.js';
//       document.body.appendChild(script);
//     }
//   }
// };

// loadOrUnloadScript();                                     // Run when the page loads
// window.addEventListener('resize', loadOrUnloadScript);    // Re-check whenever the window is resized



// BIO CONTENT
// issue in mobile (white overlay, all is invisible) 
// related to section size/height and skills probably
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

  // Grid script
  // const gridScript = document.createElement('script');
  // gridScript.type = 'text/javascript';
  // gridScript.src = 'js/grid.js';
  // document.body.appendChild(gridScript);

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
    topOffset: -50
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
// $(function(){
  
//   // desktop
//   // if (window.innerWidth > maxWidth) {
//   if (!Modernizr.touch) {
//     const bioTag = document.getElementById('bio');
//     bioTag.setAttribute('data-scroll-index', '2');
//     $.scrollIt({
//       topOffset: -1     // hack to trigger on the last nav (technically, it should be -110)
//     });
//   }

//   // mobile
//   else {
//     const bioTag = document.getElementById('bio-content');
//     bioTag.setAttribute('data-scroll-index', '2');
//     $.scrollIt({
//       topOffset: -50
//     });
//   }

// });
