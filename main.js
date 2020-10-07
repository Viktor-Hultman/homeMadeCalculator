// function myCalculator(z,x,y) {
// 	let input = z;
	
// 	switch(input) {
// 	case "add":
// 	return x + y;
// }
// }

let z
let x
let y
let result
const inputField = document.querySelector("#input-field");
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const allClearButton = document.querySelector('.clear-all');

for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener("click", function() {
		inputField.value += numberButtons[i].value
	})
}

for (let i = 0; i < operatorButtons.length; i++) {
	operatorButtons[i].addEventListener("click", function() {
		x = parseInt(inputField.value);
		z = operatorButtons[i].value
		inputField.value = "";
	})
}

equalButton.addEventListener("click", function() {
	y = parseInt(inputField.value);
	calculation(z,x,y);
	inputField.value = result;
})

allClearButton.addEventListener("click", function() {
	y = 0
	x = 0
	z = ""
	inputField.value = "";
	result = ""
})

// document.getElementById("1-btn").addEventListener("click", inputBtn1);
// document.getElementById("2-btn").addEventListener("click", inputBtn2);

// function inputBtn1() {
// 	document.getElementById("input-field").value += document.getElementById("1-btn").value
// }

// function inputBtn2() {
// 	document.getElementById("input-field").value += document.getElementById("2-btn").value
// }

function calculation(z,x,y) {
	
	switch(z) {
	case "add":
		result = x + y;
		break;
	case "subtract":
		result = x - y;
		break;
	case "multiply":
		result = x * y;
		break;
	case "divide":
		result = x / y;
		break;
	default:
		return "please choose a valid input ('add','subtract','multiply' or 'divide')"
}}


//Each button should pass it´s value to the input field

//When the equals button is pressed the values in the input field is "taken" and used in a calculation function

//The result of the calculation should then be displayed somewhere on the calculator