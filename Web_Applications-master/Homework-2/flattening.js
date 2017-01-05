var arrays = [[2,4,6],[8],[10,12]];
arrays = arrays.reduce(function(a,b){
	return a.concat(b);
},[]);
console.log(arrays);