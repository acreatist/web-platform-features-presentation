(function () {
  $('#container_form').on('change', function (event) {
    var propName = event.target.labels[0].firstChild.textContent.trim(),
      propValue = event.target.value;

    $('.flexbox_container').css(propName, propValue);
  });

  var optionsTemplate = $('#flexbox_options_template'),
    containerCssProps = {
      //main axis
      'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
      'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      //cross axis
      'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
      'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
      'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
    },
    itemCount = 3,
    itemCssProps = {
      'order': Object.keys(Array.apply(null, Array(itemCount + 1))).map(Number),
      'flex-grow': [0, 1, 2, 5],
      'flex-shrink': [1, 0, 2, 5],
      'flex-basis': ['auto', '3em', '5em', '8em'],
      'align-self': ['auto'].concat(containerCssProps['align-items'])
    };

  render(containerCssProps, $('#container_form'));
  for (var i = 1; i <= itemCount; i += 1) {
    var form = $('#item' + i + '_form');
    render(itemCssProps, form);
    (function (i) {
      form.on('change', function (event) {
        var propName = event.target.labels[0].firstChild.textContent.trim(),
          propValue = event.target.value;

        $('.flexbox_item:nth-child(' + i + ')').css(propName, propValue);
      });
    })(i);
  }

  function render(props, parent) {
    Object.keys(props).forEach(function (key) {
      var templateCopy = optionsTemplate.prop('content').cloneNode(true),
        label = templateCopy.querySelector('label'),
        select = templateCopy.querySelector('select');

      label.insertBefore(document.createTextNode(key), label.firstChild);
      props[key].forEach(function (value) {
        select.appendChild($('<option>' + value + '</option>').get(0));
      });

      parent.append(templateCopy);
    });
  }
})();
