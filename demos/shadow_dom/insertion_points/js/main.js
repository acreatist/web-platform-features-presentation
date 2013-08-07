(function () {
  $('#add_shadow').one('click', function () {
    var shadowHost = $('#user_list').get(0),
      shadowRoot = shadowHost.createShadowRoot(),
      shadowContent = $('#shadow_lists_template').prop('content').cloneNode(true);
      
    shadowRoot.appendChild(shadowContent);
  });
})();
