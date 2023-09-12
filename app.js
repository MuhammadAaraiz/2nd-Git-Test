// Chapter1 (USER INPUT & CONDITIONAL)

// Q1


// var city = prompt("Enter of City");
// if(city === "karachi");
// alert("welcome to city of light");


//  Q2
// var gender = prompt("Enter your gender");
// if (gender === "male");{
//   massege = "welcome sir";
//   alert(massege);
// }
// if (gender === "female");{
//   massege = "welcome sister";
//   alert(massege);
// }


// Q3
// var color = prompt("color");
// var massege = " ";
// if(color==="red") {
//     massege = "must stop!!";
//     alert(massege);
// }

// var color = prompt("color");
// if (color === "Yellow")
// {
//   massege = "ready To Move!!";
//   alert(massege);
// }

// var color = prompt("color");
// if (color === "Green");
// {
//   massege = "Move Now!!";
//   alert(massege);
// }



// Q4
// var Fuel = prompt("Remaining")
// if (Fuel <= 0.25){
//     alert("“Please refill the fuel in your car”")
// }



// Q5
// A...
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// } this is true

// B...

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } THIS IS FALSE 

// C......
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// } this is true
// D... 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
//  } this is true

// E
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }this is true
// F..
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// } false



//  Q6
// // Function to calculate the grade based on percentage
// function calculateGrade(percentage) {
//     if (percentage >= 90) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 50) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// // Input marks for three subjects and total marks
// const subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
// const subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
// const subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
// const totalMarks = parseFloat(prompt("Enter total marks for the three subjects:"));

// // Calculate the total obtained marks and percentage
// const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// const percentage = (totalObtainedMarks / totalMarks) * 100;

// // Calculate the grade
// const grade = calculateGrade(percentage);

// // Determine remarks based on grade
// let remarks = "";
// if (grade === "A+" || grade === "A") {
//     remarks = "Excellent!";
// } else if (grade === "B") {
//     remarks = "Good!";
// } else if (grade === "C") {
//     remarks = "Satisfactory.";
// } else if (grade === "D") {
//     remarks = "Needs Improvement.";
// } else {
//     remarks = "Fail. Work harder.";
// }

// // Display the results
// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Marks Obtained: ${totalObtainedMarks}`);
// console.log(`Percentage: ${percentage.toFixed(2)}%`);
// console.log(`Grade: ${grade}`);
// console.log(`Remarks: ${remarks}`);


// Q7

// // Generate a random secret number between 1 and 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt the user to guess the secret number
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess is correct or close enough
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     console.log("Close enough to the correct answer.");
// } else {
//     console.log(`Sorry, the secret number was ${secretNumber}. Try again!`);
// }



// Q8

// //  Input a number from the user
//  const number = parseInt(prompt("Enter a number:"));

// // // Check if the number is divisible by 3
//  if (number % 3 === 0) {
//     alert(`${number} is divisible by 3.`);
// console.log (`${number} is divisible by 3.`);
//  } else {
//     alert (`${number} is not divisible by 3.`);
// console.log (`${number} is not divisible by 3.`);
//  }



//  Q9
//  // Input a number from the user
//  const number = parseInt(prompt("Enter a number:"));

//  // Check if the number is even or odd
//  if (number % 2 === 0) {
//      console.log(`${number} is an even number.`);
//      alert(`${number} is an even number.`);
//  } else {
//      console.log(`${number} is an odd number.`);
//    alert (`${number} is an odd number.`);
//  }




//  Q10
// // Input the temperature from the user
// const temperature = temperature(prompt("Enter the temperature in Celsius:"));

// // Check the temperature and display the appropriate message
// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
//     alert("The Weather today is Normal.");
    
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
//     alert("Today’s Weather is cool.");

// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("It's extremely cold outside!");
//     alert("It's extremely cold outside!");
// }



// Q11


// // Prompt the user for the first number
// var num1 = parseFloat(prompt("Enter the first number:"));

// // Prompt the user for the second number
// var num2 = parseFloat(prompt("Enter the second number:"));

// // Prompt the user for the operation (+, -, *, /, %)
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Initialize a variable to store the result
// var result;

// // Use if statements to perform the selected operation
// if (isNaN(num1) || isNaN(num2)) {
//   // Check if either input is not a valid number
//   result = "Invalid input. Please enter valid numbers.";
// } else {
//   // Perform the selected operation based on user input
//   if (operation === "+") {
//     result = num1 + num2;
//   } else if (operation === "-") {
//     result = num1 - num2;
//   } else if (operation === "*") {
//     result = num1 * num2;
//   } else if (operation === "/") {
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Division by zero is not allowed.";
//     }
//   } else if (operation === "%") {
//     if (num2 !== 0) {
//       result = num1 % num2;
//     } else {
//       result = "Modulo by zero is not allowed.";
//     }
//   } else {
//     result = "Invalid operation. Please enter +, -, *, /, or %.";
//   }
// }

// // Display the result to the user
// alert("Result: " + result);




// Chapter 2 Math Exxpresions 

// // Q1


//  //  the user  enter a number
// var a= parseInt(prompt("Enter first number:"));
// var b= parseInt(1);
// var result=(a+b);
// var c=parseInt(2);
// var result3=(a+c);
// var result4=(a+c-c);
// var result2=(a+c-b);


// display the result on the screen
// document.write(`<h3> Results: </h3>`);
// document.write(`<p>The value of a  is: ${a} </p>`);
// document.write("..................................");
// document.write("<br>");
// ;document.write("<br>");
// document.write(`<p>The value of ++a  is: ${result} </p>`);
// document.write(`<p>Now The value of a  is: ${result} </p>`);
// document.write("<br>");
// document.write(`<p>The value of a++  is: ${result} </p>`);
// document.write(`<p>Now The value of a  is: ${result3} </p>`);
// document.write("<br>");
// document.write(`<p>The value of --a  is: ${result2} </p>`);
// document.write(`<p>Now The value of a  is: ${result2} </p>`);
// document.write("<br>");
// document.write(`<p>The value of --a  is: ${result2} </p>`);
// document.write(`<p>Now The value of a  is: ${result4} </p>`);





// Q2


// var a=2
// var b=1


// document.write("Result:");
// document.write("<br>");
// document.write("<br>");
// document.write(`<p> The value of a  is: ${a} </p>`);
// document.write(`<p> The value of b  is: ${b} </p>`);
// document.write("<br>");

// --a; 
// --b; 
// var result=(a-b);
// var result2=(result-b+b)
// var result2=(result-b+b)
// document.write(`<p> The value of --a  is: ${a} </p>`);
// document.write(`<p> The value of --a - --b is: ${result} </p>`);
// ++b;
// var result1=(result+b)
// document.write(`<p> The value of --a - --b + ++b is: ${result1} </p>`);
// ++b;
// var result2=(result+b)
// document.write(`<p> The value of --a - --b + ++b + b++ is: ${result2} </p>`);




// Q3

// // Input the user's name
// const userName = prompt("Enter your name:");

// if (userName) {
//     console.log(`Hello, ${userName}! Nice to meet you.`);
// } 






// Q5
// // Input a number from the user or use 5 as the default
// const userInput = prompt("Enter a number for the multiplication table (default is 5):");
// const number = userInput ? parseInt(userInput) : 5;

// // Display the multiplication table
// document.write(`<h2>Multiplication Table for ${number}</h2>`);
// for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     document.write(`<p>${number} x ${i} = ${result}</p>`);
// }





// Q6


// // Input subject names from the user
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Total marks for each subject
// var totalMarks = 100;

// // Input obtained marks for each subject from the user
// var obtainedMarks1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));
// var obtainedMarks2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
// var obtainedMarks3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

// // Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the result in a table
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td></tr>`);
// document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td></tr>`);
// document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td></tr>`);
// document.write(`<tr><td>Total</td><td>${totalMarks * 3}</td><td>${totalObtainedMarks}</td></tr>`);
// document.write(`<tr><td>Percentage</td><td></td><td>${percentage.toFixed(2)}%</td></tr>`);
// document.write("</table>");



// Chapter 6 (Math Expression II)

// Q1
// x++;



// Q2
// x--;



// Q3
// var x = 50;
// var y = x++;
  
// y= 50;


// Q4

// var y = 50;
// var z = --y;


// y=49;



// Q5
// var newNum = num--;


// Q6
// var originalValue = anotherVariable++;


//  Q7
// var myNumber = 5;

// myNumber++;

// alert("The new value is: " + myNumber);



// Chapter 7 (Math Expression III)



// Q1

// var calculatedNum = 2 + (2 * 6);
// result=(2 * 6)=12;
//  12 + 2 = 14;



// Q2
// var calculatedNum = (2 + 2) * 6;
// result=(2 + 2)=4;
// 4 * 6 = 24;


// Q3
// var calculatedNum = (2 + 2) * (4 + 2);
// result=(2 + 2)=4; (4 + 2)=6; 
// 4 * 6 = 24;

//  Q4
// var calculatedNum = ((2 + 2) * 4) + 2;
// result=(2 + 2)=4; (4 * 4)=16;
// 16 + 2 = 18;



// Q5
// var cost = (2 + (2 * 4) + 10);



// Q6
// var units = ((2 + 2) * 4 + 10);


// Q7
// false


// Chapter 8 (Concatenating TextStrings)

//  Q1
// var num = "2" + "2";
// result= "22";


// Q2
// message = ("Hello," + "Dolly");
// alert(message);



// Q3
// alert("33" + 3);
// "333"


//  Q4
// var name1 = "Pakistan ";
// var name2 = "Zindabad";

// alert(name1 + name2);

// Q5
// var concatenatedValue = "This is a string with a number: " + 42;



// Q6
// var firstString = "Hello, ";
// var secondString = "world!";
// var concatenatedString = firstString + secondString;



// Chapter 9 (Prompts)

// Q1
// var firstName = prompt("Enter first name:");


// Q2
// var country = prompt("Country?", "China");


//  Q3
// var yourName = prompt("Enter Your Name");



// Q4
// var userInput = prompt("Please enter your name:", "Muhammad Aaraiz");



//  Q5
// var Message = "Please Enter your Age:";
// var Response = "17";

// var userResponse = prompt(Message, Response);



// Q6
// var userInput = prompt("Please enter your favorite color:", "Blue");
// alert("You entered: " + userInput);


// Chapter 10 (if statments)

// Q1
// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City of Lights");
// }


//  Q2
// if ("x === y") {
//     var z = prompt("Enter the value of z?");
//     // Now 'z' contains the user's input value
// }


//  Q3
// var ZipCode = prompt("Enter the city code");

// if (ZipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }


//Q4
// var x = 1; 

// if (x === 1) { 
//     x = 2;}


// Chapter 11 (Comparison Operators)

// Q1
// if (variable1 != variable2) {
// }


// Q2
// if (variable1 >= variable2) {
// }



// Q3
// var x = 5; 
// if (x !== 3) { 
//     x = 10; 
// }



//  Q4
// var number1 = 5;
// var number2 = 10;

// if (number1 !== number2) { 
//     alert("Congratulations!");
// }



//  Q5
// var enteredName = prompt("Enter your first name:");
// var anotherName = "Aaraiz";

// if (enteredName !== anotherName) {
//     alert("No match");
// }
