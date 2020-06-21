// Chapter 21 - 25
//task 1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName + lastName;
// alert("Welcome " + fullName);

//task 2

// var favoriteMobile = prompt("Enter your favorite Mobile Model");
// document.write("My favorite phone is: " + favoriteMobile);
// document.write("</br>Length of String: " + favoriteMobile.length);


//task 3

// var word = 'Pakistani';
// document.write("String: " + word);
// document.write("</br>Index of 'n': " + word.indexOf('n'));

//task 4

// var word = 'Hello World';
// document.write("String: " + word);
// document.write("</br>Last index of 'l': " + word.lastIndexOf('l'));

//task 5

//  var word = 'Pakistani';
//  document.write("String: " + word);
//  document.write("</br>Character at Index 3: " + word.charAt(3));

//task 6 -repeat Q1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName + lastName;
// alert("Welcome " + fullName);

//task 7
// var city = "Hyderabad";
// document.write("City: " + city);
// document.write("</br>After replacement: " + city.replace('Hyder','Islam'));

//task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));

//task 9

// var strNumber = "472";
// document.write("Value: " + strNumber + "<br>Type: String");
// document.write("<br>Value: " + parseInt(strNumber) + "</br>Type: Number");

//task 10

// var userInput  = prompt("Enter any string");
// document.write("User Input: " + userInput);
// document.write("</br>Uppercase: " + userInput.toUpperCase());

//task 11

// var userInput  = prompt("Enter any string");
// document.write("User Input: " + userInput);

// var firstChar = userInput.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = userInput.slice(1);
// otherChar = otherChar.toLowerCase();

// var titleCase = firstChar + otherChar;
// document.write("</br>Title case: " + titleCase);


//task 12
//  var num = 35.36;
//  document.write("Number: " + num);
//  var result = num.toString();
//  result = result.replace('.','');
//  document.write("</br>Result: " + result);


//task 13

//task 14

// var A = ['cake', 'apple pie', 'cookie','chips', 'patties'];
// var item = prompt("Enter any bakery item");
// item = item.toLowerCase();
// if(A.indexOf(item) !== -1){
//     document.write(item + " is <b>Available</b> at index " +A.indexOf(item) + " in our bakery");
  
// }
// else{
//     document.write("We are Sorry. " + item + " is <b>not Available</b> in our bakery");
// }


//task 15

//task 16
// var university = "University of Karachi"; 
// var arr = university.split("",);
// for(var i = 0; i<arr.length; i++){
//     document.write(arr[i] + "</br>");
// }


//task 17

// var userInput = prompt("Enter a any word");
// document.write("User Input: " + userInput);
// document.write("</br>Last character of input: " + userInput[userInput.length - 1]);


//task 18
// var text = "“The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "</br>");
// document.write("There are " + (text.match(/the/gi).length)  + " occurrence(s) of word 'the' ") // can also use (text.split('the').length - 1)


// Chapter 26 - 30
//task 1

// var userInput = +prompt("Enter a positive integer");
// document.write("Number: " + userInput + "</br>");
// document.write("Round off value: " + Math.round(userInput) + "</br>");
// document.write("Floor value: " + Math.floor(userInput) + "</br>");
// document.write("Ceil value: " +Math.ceil(userInput) + "</br>");


//task 2

// var userInput = +prompt("Enter a negative integer");
// document.write("Number: " + userInput + "</br>");
// document.write("Round off value: " + Math.round(userInput) + "</br>");
// document.write("Floor value: " + Math.floor(userInput) + "</br>");
// document.write("Ceil value: " +Math.ceil(userInput) + "</br>");


//task 3

// var userInput = +prompt("Enter a number");
// document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));

//task 4

// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice));

//task 5
// var coin = Math.random() * 2;
// if(Math.ceil(coin) === 1){
//     document.write("Random coin value: Heads");
// }
// else{
//     document.write("Random coin value: Tails");
// }


//task 6
// var number = Math.random() * 100;
// document.write("Random number between 1 and 100: " + Math.ceil(number));

//task 7

// var weight = prompt("Enter your weight");
// document.write("The weight of user is " + parseFloat(weight) + " kilograms");

//task 8

// var number = Math.random() * 10;
// var secret = Math.ceil(number);

// var userInput = +prompt("Enter a number between 1 and 10");
// if(secret === userInput){
//     alert("Congratulations dear!");
// }
// else{
//     alert("Try Again");
// }



// Chapter 31 - 34

//task 1

// var today = new Date();
// document.write(today);

//task 2

// var today = new Date();
// var months = ['January','February','March','April','May','June','July','August','September','October','November','Decmber'];

// document.write("Current month: " + months[today.getMonth()]);


//task 3

// var today = new Date();
// var days = ['Sun','Mon','Tue','Thu','Fri','Sat'];
// document.write("Today is " + days[today.getDay()]);

//task 4
// var today = new Date();
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// if(today.getDay() === 0 || today.getDay() === 6){
//     document.write("It’s Fun day");
// }
// else{
//     document.write("Today is " + days[today.getDay()]);
// }

//Task 5

// var today = new Date();
// if(today.getDate() < 16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//task 6
// var today = new Date();
// document.write("Current Date: " + today + "</br>");
// document.write("Elapsed milliseconds since jan 1, 1970: " + today.getTime() + "</br>");
// document.write("Elapsed minutes since jan 1, 1970: " + Math.floor(today.getTime()/(1000*60)) + "</br>");

//task 7
// var today = new Date();
// if(today.getHours() < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


//task 8

// var today = new Date("Dec 31, 2020");
// document.write("Later Date:" + today);

//task 9

// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();

// var firstMilli = firstRamadan.getTime();
// var todayMilli = today.getTime();
// var diff = todayMilli - firstMilli;

// document.write(Math.floor(diff/(1000*60*60*24)) + " days have passed since 1st Ramadan, 2015");


//task 10
// var refernceDate = new Date("Dec 05, 2015, 22:50:16");
// var begining = new Date("2015");
// var refMilli = refernceDate.getTime();
// var begMilli = begining.getTime();

// var diff = refMilli - begMilli;

// document.write("On reference date " + refernceDate  + ",</br>" + diff/1000 + " seconds had passed since begining of 2015")


//task 11

// var today = new Date();
// var hours = today.getHours() - 1;
// var todayBeforeHour = new Date();
// todayBeforeHour.setHours(hours);

// document.write("Current date: " + today + "</br>");
// document.write("1 hour ago, it was " + todayBeforeHour);

//task 12
// var today = new Date();
// var year = today.getFullYear() - 100;
// var beforeHundredYears = new Date();
// beforeHundredYears.setFullYear(year);

// document.write("Current date: " + today + "</br>");
// document.write("10 years back, it was " + beforeHundredYears);


//task 13
// var today = new Date();
// var year = today.getFullYear();
// var age = +prompt("Enter your age");
// document.write("Your age is " + age + "</br>");
// document.write("Your birth year is " + (year - age));

//task 14
// var custName = "Abdul Qadir";
// var today = new Date();
// var months = ['January','February','March','April','May','June','July','August','September','October','November','Decmber'];
// var nbrOfUnits = 410;
// var chargesPerUnit = 16;
// var lateFee = 350;
// var netAmmount = nbrOfUnits * chargesPerUnit;
// var ammountAfterDate = netAmmount + lateFee;

// document.write("<h1>K-Electric Bill</h1></br>");
// document.write("Customer Name: <b>" + custName + "</b></br>");
// document.write("Month: <b>" + months[today.getMonth()] + "</b></br>");
// document.write("Number of units: <b>" + nbrOfUnits + "</b></br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");

// document.write("Net Ammount Payable(within Due Date): <b>" + netAmmount + "</b></br>");
// document.write("Late Payment Surcharges: <b>" + lateFee+ "</b></br>");
// document.write("Gross Ammount Payable(after Due Date): <b>" + ammountAfterDate+ "</b></br>");


// Chapter 35 - 38
//task 1

// function current(){
//     var today = new Date();
//     document.write(today);
// }
// current();

//task 2

// function fullName(firstName,lastName){
//     alert("Welcome " + firstName + " " +lastName);
// }
// fullName("Abdul","Qadir");

//task 3
//  function add(a,b){
//      return a+b;
//  }
//  console.log(add(3,8));

//task 4
// function calc(num1,op,num2){
//     if(op === "+"){
//         return num1 + num2;
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else if(op === "/"){
//         return num1 / num2;
//     }
//     else if(op === "*"){
//         return num1 * num2;
//     }
//     else{
//         return "Invalid Operator!";
//     }

// }

// console.log(calc(4,'-',3)) // 1
// console.log(calc(4,'%',3)) // Invalid Operator!

//task 5
// function square(num){
//     return num*num;
// }
// console.log(square(5)); //25


//task 6
// function factorial(num){
//     if(num < 0){
//         return -1;
//     }
//     else if(num === 0){
//         return 1;
//     }
//     else{
//         return (num * factorial(num - 1));
//     }
// }

// console.log(factorial(5)); // 120


//task 7

// function count(start,end){
//     for(var i = start; i<=end; i++){
//         document.write(i + "</br>");
//     }
// }

// count(3,12); // 3,4,5 ... 12


//task 8

// function  calculateHypotenuse(base,perpendicular){
 //    return Math.hypot(base,perpendicular);
 // //or
//    return Math.sqrt(base*base + perpendicular*perpendicular);

// }

// console.log(calculateHypotenuse(4,3));


//task 9

// function area(length,width){
//     var A = length * width;
//     return A;
// }

// //Arguments as value 
// console.log(area(4,8));

// var len = 8 , wid = 7;
// // Arguments as variables 
// console.log(area(len,wid));


//task 10



//task 11 - Error occuring
// function titleCase(str){
//     var myString = str.toLowerCase().split(" ");
//     for(var i = 0; i < myString.length; i++){
//         var subString = myString.split("");
//         for(j = 0; j < subString.length; j++){
//             subString[0] = subString[0].toUpperCase();
//         }
//         myString[i] = subString.join('');
//     }
//     return myString.join(' ');
// }

// console.log(titleCase("the quick brown fox"))


//task 12

// function findLogestWord(str){
//    var strSplit = str.split(" ");
//    var longest = 0;
//    var word = null;
//    for(var i = 0; i<strSplit.length; i++){
//        if(strSplit[i].length > longest){
//            longest = strSplit[i].length;
//            word = strSplit[i];
//        }
//    }
//    return word;
// }
// console.log(findLogestWord("Web Development Tutorial"));

//task 13

// function countStr(str,occurrence){
//     var rgxp = new RegExp(occurrence,"gi")
//     return str.match(rgxp).length; 
// }

// console.log(countStr("occurence",'c')); // 3


//task 14

function calcCircumference(r){
    var pi = 3.14;
    var circumference =  2*pi*r;
    document.write("The circumference is " + circumference);
}

function calcArea(r){
    var pi = 3.14;
    var area =  pi*Math.pow(r,2);
    document.write("</br>The area is " + area);
}

calcCircumference(6);
calcArea(6);