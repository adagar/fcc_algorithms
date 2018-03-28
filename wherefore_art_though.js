
function whatIsInAName(collection, source) {
  // What's in a name?
  var keyList = Object.keys(source);
  return collection.filter(function(obj){
    for(var i in keyList){
      if(!obj.hasOwnProperty(keyList[i]) || obj[keyList[i]] != source[keyList[i]]){
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
