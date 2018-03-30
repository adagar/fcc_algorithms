
function pairElement(str) {
  var compDNA = [];
  
  for(var i = 0; i < str.length; i++){
    var pair = "";
    switch(str[i]){
      case "C":
        pair = "G";
        break;
      case "G":
        pair = "C";
        break;
      case "A":
        pair = "T"
        break;
      case "T":
        pair = "A";
        break;
    }
    compDNA.push([str[i], pair]);
    
  }
  return compDNA;
}

pairElement("GCG");
