//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user





//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

var radius = prompt("What is the radius of your cirlce?")

function circleCalculation (radius) {
	let circumference = 2 *(Math.PI) * radius;
	let area = (Math.PI * radius) ^ 2;
	console.log("The area of the circle is " + Math.round(area) + " and the perimeter of the circle is " + Math.round(circumference));
}
 
circleCalculation(radius);
// circleCalculation(10);
// circleCalculation(110);
// circleCalculation(1);


