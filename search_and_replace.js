function beforeMatch(before, after){
  /*
    Before: String to have its case changed
    After: String whose case is being targeted
    Returns a new string that has before's content matched to after's case
   */
}

function myReplace(str, before, after) {
  var beforeMatch = matchCase(before, after);
  return str.replace(beforeMatch, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
