(function init() {
  performance.mark('startAppInit');

  performance.mark("startFetchUsers");
  doFetchUsers(); // Some developer code
  performance.mark("endFetchUsers");
  performance.measure('fetchUsers', 'startFetchUsers', 'endFetchUsers');

  performance.mark("startUpdateUsers");
  doUpdateUsers(); // Some developer code
  performance.measure('updateUsers', 'startUpdateUsers'); //end mark is the current point of time by default

  performance.mark('endAppInit');

  performance.measure('timeSinceNavigationStart'); //no startMark nor endMark provided

  measurePerf();
})();

function measurePerf() {
  var perfEntries = performance.getEntries();
  for (var i = 0; i < perfEntries.length; i++)
  {
      console.log(perfEntries[i].startTime, JSON.stringify(perfEntries[i], null, '  '));
  }
}

function doFetchUsers() {
  Array.apply(null, new Array(100000)).map(function (item, index) {
    return {
      name: 'user_' + index
    }
  });
}

function doUpdateUsers() {
  var now = new Date().toString();

  Array.apply(null, new Array(100000)).map(function (item, index) {
    return {
      name: 'user_' + index,
      updated: now
    }
  });
}
