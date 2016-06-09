$(window).load(function() {
  /* Show Preloader with Critical CSS */
  $('.js-preloader').fadeOut(200);

  /* Remove Preloader from DOM after site is ready */
  setTimeout(function(){
    $('.js-preloader').remove();
  }, 300);

  /* Define Site Reveal Variables */
  var revealContainer = $('.js-reveal-site');
  var page = $('.js-page');
  var pageContent = $('.js-page-content');

  /* Reveal Container */
  TweenLite.to(revealContainer, .6, {left:'0', width:'102vw', ease: Power3.easeOut, onComplete: TweenTop});

  /* Chain Function */
  function TweenTop() {
    TweenLite.to(revealContainer, .6, {top:'0', height:'102vh', ease: Power3.easeOut, onComplete: setPageBackground});
  }

  /* Set Page Background along with opacity easing */
  function setPageBackground() {
    TweenMax.set(page, {backgroundColor: '#000'});
    TweenMax.set(pageContent, {opacity: '1'});
    TweenLite.to(revealContainer, 1, {opacity:'0', ease: Power3.easeOut, onComplete: removeFromDom});

  }

  /* Remove Unused Elements from DOM */
  function removeFromDom() {
    revealContainer.remove();
  }
});
