/**
 * FUNCTIONS AND THEIR USAGE
 */
function add(a, b){
	return (a+b);
}

console.log(add(2,3));
/*
 * It should be noted that always the calling function will be executed first and then the called function.
 * Thus, line 10 will be executed first and then the function above. Similarly, if we want to execute the
 * add function 10 times with different values passed to the function, it can be done as shown below:
 */
console.log(add(3,3));
console.log(add(4,3));
console.log(add(5,3));
console.log(add(6,3));
console.log(add(8,3));
console.log(add(9,3));
console.log(add(10,3));
console.log(add(11,3));
console.log(add(12,3));

/**
 * ARRAYS
 */
var arr = ["hello", "world", "4", "goodbye"];

for(var i=0; i<arr.length; i++){
	console.log("The value present at index '" + i + "': " + arr[i]);
}

/*
 * Another way of creating an array is as shown below:
 */
var arr2 = new Array();

arr2[0] = "Hello2";
arr2[1] = "World2";
arr2[2] = "42";
arr2[3] = "goodbye2";

for(var i=0; i<arr2.length; i++){
	console.log("The value present at index '" + i + "': " + arr2[i]);
}

console.log("Printing the values in reverse...");
for(var i=arr2.length-1; i>=0; i--){
	console.log("The value present at index '" + i + "': " + arr2[i]);
}

/**
 * STRING FUNCTIONS
 */
//charAt
var fname = "Rahul"; //--> Declaring a string (String Literal)

console.log("Printing all the characters at all indexes in the String: '" + fname + "'...");
for(var i=0; i<fname.length; i++){
	console.log("Index '" + i + "': " + fname.charAt(i));
}

//concat
var lname = " Shetty";
var fullName = fname.concat(lname);
console.log("Concatenating first and last names, thus we have '" + fullName + "'");

//indexOf
console.log("Index of 'R' in the full name: " + fullName.indexOf('R'));
console.log("FOR THE FULL NAME: ")
for(var i=0; i<fullName.length; i++){
	var currChar = fullName.charAt(i);
	console.log("Index of '" + currChar + "' in the full name: " + fullName.indexOf(currChar));
}

//slice
var slicedString = fullName.slice(1,4);
console.log("The characters present from string position 2 to 4 in the full name: " + slicedString)

//toUpperCase
console.log("The full name in upper string: " + fullName.toUpperCase());

//trim - Used to remove the extra spaces present AFTER THE FULL VALUE AND NOT FROM BETWEEN
var nameWithSpaces = new String("Rahul               "); //--> Another way of declaring a string (String object)
console.log("The trimmed full name: " + nameWithSpaces.trim());
