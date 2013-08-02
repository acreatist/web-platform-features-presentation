(function init() {
  function addListener(selector, eventName, listener) {
    document.querySelector(selector).addEventListener(eventName, listener, false);
  }

  var dialogEl = document.querySelector('dialog');

  addListener('#show_dialog_button', 'click', function () {
    !dialogEl.open && dialogEl.show();
  });

  addListener('#show_modal_dialog_button', 'click', function () {
    !dialogEl.open && dialogEl.showModal();
  });

  addListener('#close_dialog_button', 'click', function () {
    dialogEl.open && dialogEl.close();
  });

  (function closeDialogOnButtonClick() {
    dialogEl.addEventListener('click', function (event) {
      if (event.target.tagName.toLowerCase() === 'button') {
        dialogEl.open && dialogEl.close(event.target.textContent);
        console.log('dialog was closed with return value: ' + dialogEl.returnValue);
      }
    }, false);
  })();
})();
