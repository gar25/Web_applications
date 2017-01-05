document.getElementById("startButton").addEventListener("click", objects);
//function that generates the number of objects based upon the input
function objects(){
	var turns = 0;
	var x = document.getElementById("numSymbols").value;
	document.getElementById("game").style.visibility = "hidden";
	//max number of symbols that is allowed.
	var cells = 0;
	document.getElementById("gameCounter").innerHTML = "Guess Counter:";
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode(turns);
	btn.appendChild(t);
	document.getElementById("gameCounter").appendChild(btn);

	if(x > 0){
		if(x > 8){
			x = 8;
		}
		cells = x * 2;
		var symbol_array = [0,1,2,3,4,5,6,7];
		//shuffle the array and place the symbols into the object.
		for(var i = 7; i >= 0; i--){
			var current_index = Math.floor(Math.random() * 8);
			var temp_value = symbol_array[current_index];
			symbol_array[current_index] = symbol_array[i];
			symbol_array[i] = temp_value;
		}
		var symbols = [];
		for(var i = 0; i < x; i++){
			symbols.push(symbol_array.pop());
		}
		//generate the table.
		for(var i = 0; i < x; i++){
			document.getElementById("row" + i).style.display = "table-row";
		}
		var cell_array = [];
		for(var i = 0; i < cells; i++){
			cell_array.push(i);
		}
		//shuffle the array of cells
		for(var i = cells - 1; i >= 0; i--){
			var current_index = Math.floor(Math.random() * cells);
			var temp_value = cell_array[current_index];
			cell_array[current_index] = cell_array[i];
			cell_array[i] = temp_value;
		}
		//4 cells
		//2 symbols
		//obtain the first symbol
		var holder = 0;

		var counter = 0;
		var i = 0;
		var j = 0;
		var temp = 0;
		for(i = 0; i < x; i++){
			var symbol = symbols[i];
			for(j = 0; j < 2; j++){
				temp = j + holder;
				document.getElementById("rc_" + cell_array[temp]).value = symbol;
				document.getElementById("rc_" + cell_array[temp]).innerHTML = symbol;
				counter += 1;
			}
			holder += 2;
		}
		var arg = 'hello';
		var limit = 0;
		var match_array = []; var tile_array = [];
		var temp = ""; var matches = 0;
		document.getElementById("rc_0").addEventListener("click", function(){
			document.getElementById("rc_0").setAttribute("class", "show");
			match_array.push(document.getElementById("rc_0").value);
			if(temp == "rc_0"){
				match_array[1] = "blank";
			}
			temp = "rc_0";
			tile_array.push("rc_0");
			limit++;
			if(limit == 2){
				turns++;
				var textnode = document.createTextNode(turns);
				btn.removeChild(btn.childNodes[0]);
				btn.appendChild(textnode);
				if(match_array[0] == match_array[1]){
					alert("Match Found!");
					matches+=2;
					if(matches == cells){
						document.getElementById("myTable").style.display = "none";
						alert("Game Over! Thanks 4 Playing");
						document.getElementById("reset").style.display = "inline-block";
					}
					match_array = [];
					limit = 0;
					tile_array = [];
					temp = "";
				}else
					setTimeout(clear_tiles, 200);
					function clear_tiles(){
						document.getElementById("" + tile_array[0]).setAttribute("class", "show1");
						document.getElementById("" + tile_array[1]).setAttribute("class", "show1");
						limit = 0;
						match_array = [];
						tile_array = [];
						temp = "";
					}
			}
		});
		//===================================================================
		document.getElementById("rc_1").addEventListener("click", function(){
			document.getElementById("rc_1").setAttribute("class", "show");
			match_array.push(document.getElementById("rc_1").value);
			if(temp == "rc_1"){
				match_array[1] = "blank";
			}
			temp = "rc_1";
			tile_array.push("rc_1");
			limit++;
			if(limit == 2){
				turns++;
				var textnode = document.createTextNode(turns);
				btn.removeChild(btn.childNodes[0]);
				btn.appendChild(textnode);
				if(match_array[0] == match_array[1]){
					alert("Match Found!");
					matches+=2;
					if(matches == cells){
						document.getElementById("myTable").style.display = "none";
						alert("Game Over! Thanks 4 Playing");
						document.getElementById("reset").style.display = "inline-block";
					}
					match_array = [];
					limit = 0;
					tile_array = [];
					temp = "";
				}else
					setTimeout(clear_tiles, 200);
					function clear_tiles(){
						document.getElementById("" + tile_array[0]).setAttribute("class", "show1");
						document.getElementById("" + tile_array[1]).setAttribute("class", "show1");
						limit = 0;
						match_array = [];
						tile_array = [];
						temp = "";
					}
			}
		});
		//===================================================================
		document.getElementById("rc_2").addEventListener("click", function(){
			document.getElementById("rc_2").setAttribute("class", "show");
			match_array.push(document.getElementById("rc_2").value);
			if(temp == "rc_2"){
				match_array[1] = "blank";
			}
			temp = "rc_2";
			tile_array.push("rc_2");
			limit++;
			if(limit == 2){
				turns++;
				var textnode = document.createTextNode(turns);
				btn.removeChild(btn.childNodes[0]);
				btn.appendChild(textnode);
				if(match_array[0] == match_array[1]){
					alert("Match Found!");
					matches+=2;
					if(matches == cells){
						document.getElementById("myTable").style.display = "none";
						alert("Game Over! Thanks 4 Playing");
						document.getElementById("reset").style.display = "inline-block";
					}
					match_array = [];
					limit = 0;
					tile_array = [];
					temp = "";
				}else
					setTimeout(clear_tiles, 200);
					function clear_tiles(){
						document.getElementById("" + tile_array[0]).setAttribute("class", "show1");
						document.getElementById("" + tile_array[1]).setAttribute("class", "show1");
						limit = 0;
						match_array = [];
						tile_array = [];
						temp = "";
					}
			}
		});
		//===================================================================
		document.getElementById("rc_3").addEventListener("click", function(){
			document.getElementById("rc_3").setAttribute("class", "show");
			match_array.push(document.getElementById("rc_3").value);
			if(temp == "rc_3"){
				match_array[1] = "blank";
			}
			temp = "rc_3";
			tile_array.push("rc_3");
			limit++;
			if(limit == 2){
				turns++;
				var textnode = document.createTextNode(turns);
				btn.removeChild(btn.childNodes[0]);
				btn.appendChild(textnode);
				if(match_array[0] == match_array[1]){
					alert("Match Found!");
					matches+=2;
					if(matches == cells){
						document.getElementById("myTable").style.display = "none";
						alert("Game Over! Thanks 4 Playing");
						document.getElementById("reset").style.display = "inline-block";
					}
					match_array = [];
					limit = 0;
					tile_array = [];
					temp = "";
				}else
					setTimeout(clear_tiles, 200);
					function clear_tiles(){
						document.getElementById("" + tile_array[0]).setAttribute("class", "show1");
						document.getElementById("" + tile_array[1]).setAttribute("class", "show1");
						limit = 0;
						match_array = [];
						tile_array = [];
						temp = "";
					}
			}
		});
	}
}