setTimeout(game_script, 1000);
function game_script(){
	document.getElementById("level4_part1").style.display = "block";
	document.getElementById("level4_list").style.display = "block";
	setTimeout(list_gone, 3000);
	function list_gone(){
		document.getElementById("level4_list").style.display = "none";
	}
	setTimeout(answers, 3000);
	function answers(){
		document.getElementById("level4_answers").style.display = "block";
		document.getElementById("first_structure").style.display = "block";
		document.getElementById("second_structure").style.display = "block";
		document.getElementById("third_structure").style.display = "block";
		document.getElementById("fourth_structure").style.display = "block";
		document.getElementById("fifth_structure").style.display = "block";
	}
}