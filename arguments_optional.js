function addTogether(x){
	var args = Array.prototype.slice.call(arguments);
    console.log(args);
    if(!(args.every(function(x){return typeof(x) == 'number';}))){	
      return undefined;
    }else if(args.length > 1){
		return args.reduce((total, amount) => total + amount);
	}
	//console.log(args);
	return function(y){
		if(typeof(y) == 'number'){
			return x + y;
		}
		return undefined;
	};
}

console.log(addTogether(2, "3"));


