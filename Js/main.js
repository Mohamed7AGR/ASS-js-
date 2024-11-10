//1- Write a program that allow to user enter number then print it

// var number = prompt("Enter a number:");
// alert(number);

///////////////////////////////////////////////////////////////////////

//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var number = prompt("Enter a number:");
// if (number % 3 === 0 && number % 4 === 0) {
//   alert("Yes");
// } else {
//   alert("No");
// }

///////////////////////////////////////////////////////////////////////

//3- Write a program that allows the user to insert 2 integers then print the max

// var number1 = Number(prompt("Enter the first number:"));
// var number2 = Number(prompt("Enter the second number:"));
// if (number1 > number2) {
//   alert("The maximum number is: " + number1);
// } else {
//   alert("The maximum number is: " + number2);
// }

////////////////////////////////////////////////////////////////////////

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var number = Number(prompt("Enter the  number:"));
// if (number >0 ) {
//   alert( number + " is Positive Number ");
// } else if(number <0 ) {
//     alert( number + " is Negative Number ");
// }else{
//     alert( number);
// }

/////////////////////////////////////////////////////////////////////////

//5- Write a program that take 3 integers from user then print the max element and the min element.
// var number1 = Number(prompt("Enter First Number"));
// var number2 = Number(prompt("Enter Second Number"));
// var number3 = Number(prompt("Enter Third Number"));
// if (number1 > number2 && number1 > number3 && number2 > number3) {
//   alert("Max Number is : " + number1);
//   alert("Min Number is : " + number3);
// } else if (number2 > number1 && number2 > number3 && number1 > number3) {
//   alert("Max Number is : " + number2);
//   alert("Min Number is : " + number3);
// } else if (number3 > number1 && number3 > number2 && number2 > number1) {
//   alert("Max Number is : " + number3);
//   alert("Min Number is : " + number1);
// }

///////////////////////////////////////////////////////////////////////

//6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var number = Number(prompt("Enter a Number"));
// if (number % 2 == 0) {
//   alert(number + " is Even");
// } else {
//   alert(number + " is Odd");
// }

///////////////////////////////////////////////////////////////////////
//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char = prompt("Enter your char");
//     switch (char) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//       case "A":
//       case "E":
//       case "I":
//       case "O":
//       case "U":
//         alert("vowel");
//         break;
//       default:
//         alert("consonant");
//         break;
//     }

////////////////////////////////////////////////////////////////
//9- Write a  program that allows user to insert integer then print all numbers between 1 to that’s number
// var number =Number( prompt("Enter a Number"));
// for (var i = 1; i <= number; i++) {
//   alert(i);
// }

/////////////////////////////////////////////////////////////

//10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var number = Number( prompt("Enter a Number"));
// for (var i = 1; i <= 12; i++) {
//   alert(i * number);
// }

//////////////////////////////////////////////////////////////

//11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var number = Number(prompt("Enter number :"));
// for (var i = 2; i <= number; i+=2) {
//   alert(i);
// }

////////////////////////////////////////////////////////////////

//12- Write a program that take two integers then print the power
// var number = Number(prompt("Enter a Number"));
// var power = Number(prompt("Enter a Power"));
// var result = 1;
// for (var i = 0; i < power; i++) {
//   result *= number;
// }
// alert(result);

//////////////////////////////////////////////////

//12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var totalMarks = 0;

// for (var i = 0; i < 5; i++) {
//   totalMarks += Number(prompt("Enter your mark subject" + (i + 1)));
// }
// alert("Total marks = " + totalMarks);
// alert("Average Marks = " + totalMarks / 5);
// alert("Percentage = " + (totalMarks / 500) * 100 + "%");

//////////////////////////////////////////////////////////////////////////////

//13-Write a program to input month number and print number of days in that month.
// var monthNumber = window.prompt("Enter month number");
// if (
//   monthNumber == 1 ||
//   monthNumber == 3 ||
//   monthNumber == 5 ||
//   monthNumber == 7 ||
//   monthNumber == 8 ||
//   monthNumber == 10 ||
//   monthNumber == 12
// ) {
//   alert("Days in Month: 31");
// } else if ((monthNumber = 2)) {
//   alert("Days in Month: 28");
// } else if (
//   monthNumber == 4 ||
//   monthNumber == 6 ||
//   monthNumber == 9 ||
//   monthNumber == 11
// ) {
//   window.alert("Days in Month: 30");
// }

////////////////////////////////////////////////////////////////////////////

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// var totalMarks = 0;
// for (var i = 0; i < 5; i++) {
//   totalMarks += Number(prompt("Enter your mark subject " + (i + 1)));
// }
// var percentage =   totalMarks / 500 * 100;
// alert("Percentage = " + (totalMarks / 500) * 100 + "%");
// if(percentage>=90){
//     window.alert("Grade A")
// }else if(percentage>=80){
//     window.alert("Grade B")
// }else if(percentage>=70){
//     window.alert("Grade C")
// }else if(percentage>=60){
//     window.alert("Grade D")
// }else if(percentage>=40){
//     window.alert("Grade E")
// }else if(percentage<40){
//     window.alert("Grade F")
// }
///////////////////////////////////////////////////////////////////////

//15- Write a program to print total number of days in month
// var monthNumber = window.prompt("Enter month number");
// switch(monthNumber){
//     case"1":
//     case"3":
//     case"5":
//     case"7":
//     case"8":
//     case"10":
//     case"12":
//     alert("Days in Month: 31");
//     break;
//     case"4":
//     case"9":
//     case"11":
//     alert("Days in Month: 30");
//     break;
//     case"2":
//     alert("Days in Month: 28");
//     break;
//     default:
//         alert("not a number");
//         break;
// }

////////////////////////////////////////////////////////////////

//16- Write a program to check whether an alphabet is vowel or consonant
// var char = prompt("Enter your char");
//     switch (char) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//       case "A":
//       case "E":
//       case "I":
//       case "O":
//       case "U":
//         alert("vowel");
//         break;
//       default:
//         alert("consonant");
//         break;
//     }
/////////////////////////////////////////////////////////////////////
//17- Write a program to find maximum between two numbers
// var number1 = Number(prompt("Enter first number"));
// var number2 = Number(prompt("Enter sec number"));

// switch (number1 > number2) {
//   case true:
//     alert(number1 + " is the maximum number");
//     break;
//   case false:
//     alert(number2 + " is the maximum number");
//     break;
// }
//////////////////////////////////////////////////////////////////
//18- Write a program to check whether a number is even or odd
// var number = Number(prompt("Enter  number"));
// switch (number % 2 == 0) {
//   case true:
//     alert(number + " is Even");
//     break;
//   case false:
//     alert(number + " is Odd");
//     break;
// }
////////////////////////////////////////////////////////////////////////

//19- Write a program to check whether a number is positive or negative or zero
// var number = Number(prompt("Enter  number"));
// switch (number > 0) {
//   case true:
//     alert(number + " is positive");
//     break;
//   case false:
//     switch (number == 0) {
//       case true:
//         alert("Zero");
//         break;
//       case false:
//         alert("negative");
//         break;
//     }
//     break;
// }
///////////////////////////////////////////////////////////////////////////////

//20- Write a program to create Simple Calculator
// var number1 = Number(window.prompt("Enter first number"));
// var op = window.prompt("Enter your operator");
// var number2 = Number(window.prompt("Enter second number"));
// switch(op){
//     case"+":
//     alert(number1+number2);
//     break;
//     case"-":
//     alert(number1-number2);
//     break;
//     case"*":
//     alert(number1*number2);
//     break;
//     case"/":
//     alert(number1/number2);
//     break;

// }
