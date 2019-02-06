/**
 * 
 */

/* TO PRINT ANYTHING ON THE SCREEN */
console.log("Welcome to JS Basics.");

/* DATATYPES */
/*
 * JS is a dynamic type language, means you don't need to specify the type of variable becaues it is 
 * dynamically used by JS engine and JS engines decides which datatype should be used to assign the 
 * entered value. But we need to specify a generic datatype called as 'var' to just let the engine 
 * know that we are declaring a variable. Thus, 
 */
var a = 4; 			//JS engined intelligently store the value 4 as int value in variable 'a'
var b = "Hello";	//JS engine intelligently stores the value "Hello" as a String in variable 'b'
console.log(a);
console.log(b);

/* CONDITIONAL STATEMENT: IF - ELSE */
var c = "five";

if(c == "one"){
	console.log("Statement is one");
}else if(c == "two"){
	console.log("Statement is false");
}else if(c == "three"){
	console.log("Statement is three");
}else{
	console.log("Nothing is matched");
}

/* LOOPS: FOR */
//Print number 1 to 10
console.log("FOR LOOP")
for(var i=1; i<=10; i++){
	console.log(i);
}

/* LOOPS: WHILE */
//Print number 1 to 10
console.log("WHILE LOOP")
var i=1;
while(i<=10){
	console.log(i);
	i++;
}

/* LOOPS: DO - WHILE */
//Print number 0 to 10
console.log("DO WHILE");
var i=0;
do{
	console.log(i);
	i++;
}while(i<=10);

