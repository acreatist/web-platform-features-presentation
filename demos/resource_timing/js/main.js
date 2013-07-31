(function init() {
  window.addEventListener('load', function () {
    performance.getEntries('resource').forEach(function (resourceEntry) {
      console.log('name:', resourceEntry.name);
      console.log('initiatorType:', resourceEntry.initiatorType);
      console.log(JSON.stringify(resourceEntry, null, '  '));
    });
  }, false);
})();
