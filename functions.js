/* To access +, -, *, /, and = as simple calculations through 
generic calculator there should be functions that call from 
math and prepare for the next round of input. */
 
var valueIn = document.getElementById("valueIn").value;
var answer = document.getElementById("answer").value;

function one(){
	
}

function two(){
	
}

function three(){
	
}

function four(){
	
}

function five(){
	
}

function six(){
	
}

function seven(){
	
}

function eight(){
	
}

function nine(){
	
}

function add(valueIn){
//	answer = document.getElementById("answer").value;
var valueIn = document.getElementById("valueIn").value;
var answer = document.getElementById("answer").value;
	answer = valueIn + answer;
 	document.getElementById("answer").outerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }
 
function subt(valueIn){
	answer = answer - valueIn;
	document.getElementById("answer").innerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }
 
 function mult(valueIn){
	answer = valueIn * answer;
	document.getElementById("answer").innerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }
 
 function divi(valueIn){
	answer = answer / valueIn;
	document.getElementById("answer").innerHTML = answer;
 	document.getElementById("valueIn").value = "";
	return answer;
 }
  
 function answer(valueIn){
 	alert(answer); // display answer. Only need to display because each operator already handles the arithmetic.
	answer = 0; // attempt to clear answer for new input.
 }	

 function clear(){
 	document.getElementById("answer").value = 0;
 	document.getElementById("valueIn").value = "";
 }