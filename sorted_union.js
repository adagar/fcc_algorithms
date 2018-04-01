
function uniteUnique(arr) {
  //console.log(arguments)
  var flat = [];
  var newArr = Array.prototype.slice.call(arguments).reduce((prev, curr) =>
      prev.concat(curr), []);
  
  for(var i = 0; i < newArr.length; i++){
    console.log("Array item: " + newArr[i]);
    if(!flat.includes(newArr[i])){
      flat.push(newArr[i]);
    }
  }
  return flat;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, [1]]);
