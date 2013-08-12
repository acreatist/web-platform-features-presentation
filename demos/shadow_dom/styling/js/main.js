(function () {
  $('#add_shadow').one('click', function () {
    var shadowHost = $('.user_profile_data').get(0),
      shadowRoot = shadowHost.createShadowRoot(),
      shadowContent = $('#profile_badge_template').prop('content').cloneNode(true);
      
    shadowRoot.appendChild(shadowContent);
  });
})();
