// functions for SimpleAdder.

function addth(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var total = parseFloat(document.getElementById("total").value);
	total = num1+num2;
	document.getElementById("total").value = total;
}