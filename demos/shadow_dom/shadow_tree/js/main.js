(function () {
  $('#add_shadow').one('click', function () {
    var shadowHost = $('#sun_wrapper').get(0),
      shadowRoot = shadowHost.createShadowRoot(),
      shadowContent = createPicture('img/solar_eclipse.jpg', 'the Moon hides the Sun entirely');
      
    shadowRoot.appendChild(shadowContent);
  });
  
  function createPicture(url, title) {
    var templateCopy = $('#picture_template')
      .prop('content')
        .cloneNode(true);
        
    return $(templateCopy).children()
      .find('img')
        .attr('src', url)
        .end()
      .find('figcaption')
        .text(title)
        .end()
      .get(0);
  }
})();
