function range(arg1,arg2,arg3){
	
	var argCount = 0;
	var array = [];

	if(arg1 != null){
		argCount+=1;
	}
	if(arg2!=null){
		argCount+=1;
	}
	if(arg3!=null){
		argCount+=1;
	}

	if(argCount == 1){
		for(var i = 0; i < arg1; i++){
			array.push(i);
		}
		return array;
	}else if(argCount == 2){
		for(var i = arg1; i < arg2; i++){
			array.push(i);
		}
		return array;
	}else if(argCount == 3){
		if(arg3 > 0){
			if(arg1 > arg2){
				return array;
			}
			for(var i = arg1; i < arg2; i+=arg3){
				array.push(i);
			}
			return array;
		}else
			if(arg1 < arg2){
				return array;
			}
			for(var i = arg1; i > arg2; i+=arg3){
				array.push(i);
			}
			return array;
	}
}


range(3);
range(2,5);
range(4,9,2);
range(8,3,-2);
range(1,3,-1);
