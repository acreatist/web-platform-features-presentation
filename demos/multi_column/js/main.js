(function () {
  var optionsTemplate = $('#options_template'),
    containerCssProps = {
      'column-count': ['auto', 1, 2, 3, 4, 5],
      'column-width': ['auto', '10em', '15em', '20em'],
      'column-fill': ['NOOP', 'balance', 'auto'],
      'column-gap': ['normal', '1em', '2em', '5em'],
      'column-rule-style': ['none', 'solid', 'dotted', 'dashed'],
      'column-rule-width': ['medium', 'thin', 'thick', '5em'],
      'column-rule-color': ['black', 'orange', 'indigo']
    };

  updateCssOnChange($('#multicol'), $('#container_form'));
  render(containerCssProps, $('#container_form'));

  var elementToSpanCssProps = {
      'column-span': ['none', 'all'],
      'text-align': ['left', 'center', 'justify']
    };

  updateCssOnChange($('#child_to_span'), $('#element_span_form'));
  render(elementToSpanCssProps, $('#element_span_form'));

  var elementToBreakCssProps = {
      '-webkit-column-break-before': ['auto', 'always', 'avoid', 'left', 'right', 'page', 'column', 'avoid-page', 'avoid-column'],
      '-webkit-column-break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
      '-webkit-column-break-after': ['auto', 'always', 'avoid', 'left', 'right', 'page', 'column', 'avoid-page', 'avoid-column']
    };

  updateCssOnChange($('p'), $('#element_break_form'));
  render(elementToBreakCssProps, $('#element_break_form'));

  function updateCssOnChange(element, form) {
    form.on('change', function (event) {
      var propName = event.target.labels[0].firstChild.textContent.trim(),
        propValue = event.target.value;

      element.css(propName, propValue);
    });
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
