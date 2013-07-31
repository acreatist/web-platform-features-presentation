(function init() {
  var navigationTypes = {
    0: 'TYPE_NAVIGATE',
    1: 'TYPE_RELOAD',
    2: 'TYPE_BACK_FORWARD',
    255: 'TYPE_RESERVED'
  };
  console.log('page navigation types:', JSON.stringify(navigationTypes, null, '  '));
  console.log('page navigation type:', navigationTypes[performance.navigation.type]);
  console.log('page navigation timings:', JSON.stringify(performance.timing, null, '  '));
})();
