var expect = require('expect.js');
var assert = require('assert');
var expect_module = require('unexpected');
var should = require('should');

/* This is a testing javascript program performing unit testing that I felt could
be beneficial for learning.*/

/*Unit testing my salt implementation to determine if there are any errors in the code. */

//==================================================================

/* Through unit testing I determined that my salt implementation was adding a array of 
shuffled numbers to the end of the name variable which was not the intended implementation. Unit
testing I was able to systematically breakdown the implementation converting from an array to
a string, then from a string to a number. Thus able to correct my salt implementation. */

var name_holder = "Garrett";
var cells = 10;
var cell_array = [0,1,2,3,4,5,6,7,8,9];
for(var i = cells - 1; i >= 0; i--){
		var current_index = Math.floor(Math.random() * cells);
		var temp_value = cell_array[current_index];
		cell_array[current_index] = cell_array[i];
		cell_array[i] = temp_value;
}
name_holder += cell_array;
//==================================================================
describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			//testing to make sure that there wasn't an error in the shuffle function.
			assert.equal(-1, cell_array.indexOf(11));
			assert.equal(-1, cell_array.indexOf(12));
		});
	});
});
//==================================================================
describe('Array', function(){
	describe('#array_testing', function(){
		it('performing testing on the properties of cell_array', function(){
			expect(cell_array).to.be.an(Array);
			expect(cell_array).to.not.be.empty();
			expect(cell_array).to.have.length(10);
			expect(cell_array).to.contain(0);
			expect(cell_array).to.contain(1);
			expect(cell_array).to.contain(2);
			expect(cell_array).to.contain(3);
			expect(cell_array).to.contain(4);
			expect(cell_array).to.contain(5);
			expect(cell_array).to.contain(6);
			expect(cell_array).to.contain(7);
			expect(cell_array).to.contain(8);
			expect(cell_array).to.contain(9);
			expect(cell_array).to.be.ok();
		});
	});
});
//==================================================================
describe('Array', function(){
	describe('#conversion testing on cell_array', function(){
		//turns this into a string which is not of type number
		var number = cell_array.join("");
		it('should be a String', function(){
			should(number).be.a.String();
		});
		var number_string = parseInt(cell_array.join(""));
		it('should be a Number', function(){
			should(number_string).be.a.Number();
		});
	});
});
//==================================================================
/*
require.config({
    paths: {
        unexpected: 'path/to/unexpected'
    }
});
 
define(['unexpected'], function (expect) {
   // Your code
});*/
//==================================================================
