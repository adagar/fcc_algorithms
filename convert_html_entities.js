
function convertHTML(str) {
  // &colon;&rpar;
  var charEnt = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'" : "&apos;"};
  var keyList = Object.keys(charEnt);
  var newStr = str;
  
  for(var i = 0; i < keyList.length; i++){
    var re = new RegExp(keyList[i], "g");
    newStr = newStr.replace(re, charEnt[keyList[i]]);
  }
  
  return newStr;
}

convertHTML("Hamburgers < Pizza < Tacos");
