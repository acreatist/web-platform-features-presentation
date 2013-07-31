(function changeBackgroundStyleClasses() {
  'use strict';
  var styles = ['default', 'alert', 'blackout', 'soothe'],
    currentStyleIndex = 0,
    styleNode = document.documentElement,
    setNextStyle = function (el) {
      el.classList.remove(styles[currentStyleIndex]);
      currentStyleIndex = currentStyleIndex == styles.length - 1 ? 0 : currentStyleIndex + 1;
      el.classList.add(styles[currentStyleIndex]);
    };

  Reveal.addEventListener( 'slidechanged', function( event ) {
      //alert('slidechanged');
      setNextStyle(styleNode);
  }, false);
})();
