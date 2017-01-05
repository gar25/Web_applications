setTimeout(gameScript, 100);
function gameScript(){
	document.getElementById("level1_part1").style.display = "block";
	setTimeout(level_info,1000);
	function level_info(){
		document.getElementById("info_level1_part1").style.display = "block";
		setTimeout(animals,2000);
		function animals(){
			document.getElementById("level1_animals").style.display = "block";
			setTimeout(animals_gone,5000);
			function animals_gone(){
				document.getElementById("level1_animals").style.display = "none";
			}
			setTimeout(animal_answers,6000);
			function animal_answers(){
				document.getElementById("animal_answers").style.display = "block";
				document.getElementById("first_animal").style.display = "block";
				document.getElementById("second_animal").style.display = "block";
				document.getElementById("third_animal").style.display = "block";
			}
		}
	}
}