function genArr(arr){
  var fullArr = [];
  for(var i = arr[0]; i >= arr[1]; i--){
    fullArr.push(i);
  }
  return fullArr;
}

function smallestCommons(arr) {
  //console.log("Function called");

  var allValArr = genArr(arr.sort(function(a, b){return b - a;}));
  var counter = allValArr[0];
  //console.log(allValArr);

  for(var i = 0; i < allValArr.length; i++){
    if(Number(counter % allValArr[i]) == 0){
      //console.log(allValArr[i] + " is divisible by: " + counter);
       continue;
    } else{
      //console.log(allValArr[i] + " is NOT divisible by: " + counter);
      counter += 1;
      i = 0;
    }
  }
  return counter;
}

console.log(smallestCommons([1, 5]));
