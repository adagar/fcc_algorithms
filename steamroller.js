
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatArr = [];
  while(arr.length > 0){
    console.log(arr);
    if(Array.isArray(arr[0])){
      for(var i in arr[0]){
        arr.push(arr[0][i]);
      }
      arr.shift();
    }else{
      flatArr.push(arr.shift());
    }
  }
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
