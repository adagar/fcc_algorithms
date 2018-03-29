function properCaseMe(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function myReplace(str, before, after) {
  if(before == properCaseMe(before)){
    after = properCaseMe(after);
  }
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
