function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var keyList = Object.keys(source);
  //console.log(keyList);
  for(var i in collection){
    if(contender(collection[i], keyList)){
      for(var j in keyList){
        if(collection[i][keyList[j]] == source[keyList[j]]){
          arr.push(collection[i]);
          break;
        }
      }
    	
	}
  }
  // Only change code above this line
  return arr;
}

function contender(item, keyList){
	for(var i in keyList){
    	if(!item.hasOwnProperty(keyList[i])){
        	return false;   
		}
	}
    //console.log(item);
	return true;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));