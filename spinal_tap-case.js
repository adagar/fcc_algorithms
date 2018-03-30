
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
   
  return str.charAt(0).toLowerCase() + str.slice(1)
    .replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();})
    .replace(/(\w)\s(\w)/, "$1-$2")
    .replace(/\s/g, "")
    .replace(/_/g, "");
}

spinalCase("The_Andy_Griffith_Show");

