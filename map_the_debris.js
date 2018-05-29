
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var periodArr = [];
  for(var i in arr)
    {
      var orbRad = arr[i].avgAlt + earthRadius;
      var period = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(orbRad, 3)/GM)));
      periodArr.push({name : arr[i].name, orbitalPeriod: period});
    }
  return periodArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
