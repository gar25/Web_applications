setTimeout(game_script, 1000);
function game_script(){
	document.getElementById("level5_part1").style.display = "block";
	document.getElementById("level5_list").style.display = "block";
	setTimeout(list_gone, 4000);
	function list_gone(){
		document.getElementById("level5_list").style.display = "none";
	}
	setTimeout(answers, 4000);
	function answers(){
		document.getElementById("level5_answers").style.display = "block";
	}
}