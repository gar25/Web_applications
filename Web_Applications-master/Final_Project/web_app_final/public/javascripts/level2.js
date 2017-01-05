setTimeout(gameScript, 1000);
function gameScript(){
	document.getElementById("level2_part1").style.display = "block";
	setTimeout(color_list, 1000);
	function color_list(){
		setTimeout(answers_colors, 2000);
		function answers_colors(){
			document.getElementById("level2_colors_list").style.display = "none";
		}
		setTimeout(answers, 2000);
		function answers(){
			document.getElementById("color_answers").style.display = "block";
			document.getElementById("first_color").style.display = "block";
			document.getElementById("second_color").style.display = "block";
			document.getElementById("third_color").style.display = "block";
			document.getElementById("fourth_color").style.display = "block";
			document.getElementById("fifth_color").style.display = "block";
		}
	}
	
}