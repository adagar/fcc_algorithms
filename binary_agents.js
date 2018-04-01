  function binCon(str){
  var num = 0;
  for(var i = 0; i < str.length; i++){
    //console.log(str[i]);
    if(str[i] == 1){
      //console.log("powers!");
      num += Math.pow(2, str.length - i - 1);
    }
  }
  console.log(str + " Translates to:" + num);
  return num;
}
function binaryAgent(str) {
  var strArr = str.split(" ");
  var sentence = "";
  for(var i in strArr){
    //console.log(String.fromCharCode(binCon(strArr[i])));
    sentence += String.fromCharCode(binCon(strArr[i]));
  }
  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
