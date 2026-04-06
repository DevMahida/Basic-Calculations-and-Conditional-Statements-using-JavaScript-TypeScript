
// Add
let q1_v1 = 3;
let q1_v2 = 5;

document.getElementById("q1").innerText = "Q1. Create a program to calculate the sum of two numbers";
document.getElementById("q1-value").innerText = "Values : " + q1_v1 + " & " + q1_v2;
document.getElementById("q1-ans").innerText = "Ans : " + (q1_v1 + q1_v2);

// difference
let q2_v1 = 3;
let q2_v2 = 5;

document.getElementById("q2").innerText = "Q2. Create a program to calculate the difference between two numbers.";
document.getElementById("q2-value").innerText = "Values : " + q2_v1 + " & " + q2_v2;
document.getElementById("q2-ans").innerText = "Ans : " + (q2_v1 - q2_v2);

// product
let q3_v1 = 3;
let q3_v2 = 5;

document.getElementById("q3").innerText = "Q3. Develop a function to calculate the product of two numbers.";
document.getElementById("q3-value").innerText = "Values : " + q3_v1 + " & " + q3_v2;
document.getElementById("q3-ans").innerText = "Ans : " + (q3_v1 * q3_v2);

// Divide
let q4_v1 = 3;
let q4_v2 = 5;

document.getElementById("q4").innerText = "Q4. Write a program to divide two numbers and handle division by zero using conditional statements.";
document.getElementById("q4-value").innerText = "Values : " + q4_v1 + " Divide by " + q4_v2;

if(q4_v2 == 0){
    document.getElementById("q4-ans").innerText = "Ans : Divide by Zero not Possible";
}
else{
    document.getElementById("q4-ans").innerText = "Ans : " + (q4_v1 / q4_v2);
}

// square and cube
let q5_v1 = 3;

document.getElementById("q5").innerText = "Q5. Create a program to calculate the square and cube of a number.";
document.getElementById("q5-value").innerText = "Value : " + q5_v1;
document.getElementById("q5-ans").innerText = "Ans : Square is :" + (q5_v1 * q5_v1) + " | Cube is :  " + (q5_v1 * q5_v1 * q5_v1) ;

// area of rectangle
let q6_v1 = 3;
let q6_v2 = 5;

document.getElementById("q6").innerText = "Q6. Develop a program to calculate the area of a rectangle.";
document.getElementById("q6-value").innerText = "L & B (respectivly) : " + q6_v1 + " & " + q6_v2;
document.getElementById("q6-ans").innerText = "Area : " + (q6_v1 * q6_v2) ;

// area of circle
let q7_v1 = 3;

document.getElementById("q7").innerText = "Q7. Create a program to calculate the area of a circle.";
document.getElementById("q7-value").innerText = "Radius : " + q7_v1;
document.getElementById("q7-ans").innerText = "Area : " + (3.14 * q7_v1 * q7_v1) ;

// C to F
let q8_v1 = 3;

document.getElementById("q8").innerText = "Q8. Write a program to convert Celsius to Fahrenheit.";
document.getElementById("q8-value").innerText = "Celsius : " + q8_v1;
document.getElementById("q8-ans").innerText = "Fahrenheit : " + ((q8_v1 * (9/5)) + 32) ;

//calculate Simple Interest 
let q9_v1 = 30000; // price
let q9_v2 = 1.5; // rate
let q9_v3 = 2; // time line in year

document.getElementById("q9").innerText = "Q9. Develop a program to calculate Simple Interest using the formula: SI = (P × R × T) / 100";
document.getElementById("q9-value").innerText = "Principal Amount : " + q9_v1 + " | Rate : " + q9_v2 + " | Time : " + q9_v3 + " years";
document.getElementById("q9-ans").innerText = "Simple Interest : " + ((q9_v1 * q9_v2 * q9_v3)/100) ;
