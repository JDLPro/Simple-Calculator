/* To access +, -, *, /, and = as simple calculations through 
generic calculator there should be functions that call from 
math and prepare for the next round of input. */
//var ans;

//functions for each number key press

function one(){
	document.getElementById("answer").value = document.getElementById("answer").value + "1";	
}

function two(){
	document.getElementById("answer").value = document.getElementById("answer").value + "2";	
}

function three(){
	document.getElementById("answer").value = document.getElementById("answer").value + "3";		
}

function four(){
	document.getElementById("answer").value = document.getElementById("answer").value + "4";
}

function five(){
	document.getElementById("answer").value = document.getElementById("answer").value + "5";	
}

function six(){
	document.getElementById("answer").value = document.getElementById("answer").value + "6";	
}

function seven(){
	document.getElementById("answer").value = document.getElementById("answer").value + "7";
}

function eight(){
	document.getElementById("answer").value = document.getElementById("answer").value + "8";
}

function nine(){
	document.getElementById("answer").value = document.getElementById("answer").value + "9"; 
}

function zero(){
	document.getElementById("answer").value = document.getElementById("answer").value + "0"; 
}

// These are operator functions

function dele(){
	document.getElementById("answer").value = ""; 
}

function equa(){
	var equlaity = document.getElementById("answer").value;
	for(var i = 0; i < equlaity; i++){
		var ch = document.getElementById("answer").charAt(i);
		if(ch < 0 || ch > 9) {
			if(ch != "+" && ch != "-" && ch != "*" && ch != "/")
				alert("Incorrect entry!");
			
			switch(ch) {
				case "+": alert(ch);

				case "-": alert(ch);

				case "*": alert(ch);

				case "/": alert(ch);

				default: alert(ch);
				}

		}
	} // use a for loop to test each element of the string and add them together
document.getElementById("answer").value = parseFloat(equlaity.length);
}

function addi(){ // I want to add a new input.
	document.getElementById("answer").value = document.getElementById("answer").value + "+"; 
 }
 
// make above work then move on to others



function subt(){
	let input = document.getElementById("answer").value;
 	document.getElementById("answer").value = parseFloat(document.getElementById("answer").value) - parseFloat(input);
	return answer;
 }
 
 function mult(){
	answer = valueIn * answer;
	document.getElementById("answer").innerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }
 
 function divi(){
	answer = answer / valueIn;
	document.getElementById("answer").innerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }