setTimeout(game_script, 1000);
function game_script(){
	document.getElementById("level3_part1").style.display = "block";
	setTimeout(animals_gone, 1000);
	function animals_gone(){
		document.getElementById("level3_animal_list").style.display = "none";
	}
	setTimeout(answers, 1000);
	function answers(){
		document.getElementById("animal_answers").style.display = "block";
		document.getElementById("first_animal").style.display = "block";
		document.getElementById("second_animal").style.display = "block";
		document.getElementById("third_animal").style.display = "block";
		document.getElementById("fourth_animal").style.display = "block";
		document.getElementById("fifth_animal").style.display = "block";
	}
}