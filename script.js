var num1 = "";
var hhh = "";
var num2 = "";

function number(d){
	if(hhh == ""){
	num1 += d;}
    else{
    	num2 += d;
    }

	document.getElementById("p").innerText = num1 + hhh +num2;
}

function action(a){
	if(num2 == ""){
		hhh = a;
	}else{
		calc();
		hhh = a;
	}
	document.getElementById("p").innerText = num1 + hhh +num2;
}


function calc(){
	if(hhh == "+" ){
	num1 = parseFloat (num1)+parseFloat (num2);
	num1 += "";
	hhh = "";
	num2 ="";
	}
	if(hhh == "-" ){
	num1 = parseFloat (num1)-parseFloat (num2);
	num1 += "";
	hhh = "";
	num2 ="";}
	if(hhh == "*" ){
	num1 = parseFloat (num1)*parseFloat (num2);
	num1 += "";
	hhh = "";
	num2 ="";}
	if(hhh == "/" ){
	num1 = parseFloat (num1)/parseFloat (num2);
	num1 += "";
	hhh = "";
	num2 ="";}
	document.getElementById("p").innerText = num1 + hhh +num2;
}
function C(){
	num1 = "";
	hhh = "";
	num2 = "";
	document.getElementById("p").innerText = num1 + hhh +num2;
}