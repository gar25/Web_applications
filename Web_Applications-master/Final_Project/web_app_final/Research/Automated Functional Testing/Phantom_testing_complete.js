//var url = http://localhost:3000;
var page = require('webpage').create();
var system = require('system');
var address = '';

if(system.args.length < 2){
	console.log('You need the address!');
	phantom.exit();
}else{
	address = system.args[1];
	setTimeout(homepage_testing, 1000);
	function homepage_testing(){
		page.open(address, function(status){
			if(status == 'success'){
					console.log('Phantom testing loading... ');
					page.evaluate(function(){
						document.getElementById("name_form").value = "Garrett";
						document.getElementById("name_field").submit();
					});
					//setTimeout(function(){phantom.exit()},300);
			}
		})
	}	
	setTimeout(level1_testing, 5000);
	function level1_testing(){
		page.evaluate(function(){
			document.getElementById("first_animal").value = "Cat";
			document.getElementById("second_animal").value = "Dog";
			document.getElementById("third_animal").value = "Horse";
			document.getElementById("animal_answers").submit();				
		});
		//setTimeout(function(){phantom.exit()},300);	
	}
	setTimeout(level2_testing, 10000);
	function level2_testing(){
		page.evaluate(function(){
			document.getElementById("first_color").value = "Red";
			document.getElementById("second_color").value = "White";
			document.getElementById("third_color").value = "Blue";
			document.getElementById("fourth_color").value = "Red";
			document.getElementById("fifth_color").value = "Blue";
			document.getElementById("color_answers").submit();				
		});
	}
	setTimeout(level3_testing, 15000);
	function level3_testing(){
		page.evaluate(function(){
			document.getElementById("first_animal").value = "Cat";
			document.getElementById("second_animal").value = "Dog";
			document.getElementById("third_animal").value = "Horse";
			document.getElementById("fourth_animal").value = "Dog";
			document.getElementById("fifth_animal").value = "Cat";
			document.getElementById("animal_answers").submit();				
		});
	}
	setTimeout(level4_testing, 20000);
	function level4_testing(){
		page.evaluate(function(){
			document.getElementById("first_structure").value = "House";
			document.getElementById("second_structure").value = "Apartment";
			document.getElementById("third_structure").value = "Building";
			document.getElementById("fourth_structure").value = "Shack";
			document.getElementById("fifth_structure").value = "Mansion";
			document.getElementById("level4_answers").submit();				
		});
	}
	setTimeout(level5_testing, 25000);
	function level5_testing(){
		page.evaluate(function(){
			document.getElementById("number_answer").value = "1232545123";
			document.getElementById("level5_answers").submit();				
		});
		setTimeout(function(){phantom.exit()},300);	
	}

}