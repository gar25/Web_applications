function arrayToList(array){
	var list = null;
	var i = array.length - 1;
	for(i; i >= 0; i--)
		list = {value: array[i], rest: list};
	return list;
}
function listToArray(list){
	var array = [];
	for(var i = list; i; i = i.rest)
		array.push(i.value);
	return array;
}
function prepend(element, list){
	return {value: element, rest: list};
}
//if the number is 3
//0 1 2 3
//3 2 1 0
function nth(list, n){
	if(list == null){
		return undefined;
	}else if(n == 0){
		return list.value;
	}else
		return nth(list.rest, n-1);
}
