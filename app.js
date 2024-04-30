// Task 01  


document.write("<h2>Task 01</h2>");


var firstName = prompt("Enter first name: ");

var lastName = prompt("Enter last name: ");

document.write(`Asalamualikum, ${firstName} ${lastName}.`);


// Task 02


document.write("<h2>Task 02</h2>");


var phoneModel = prompt("Whats your favourite mobile phone model");

document.write("My favorite phone is: " + phoneModel);

var phoneModelLen = phoneModel.length

document.write("<br>");

document.write("Lenght of string is: " + phoneModelLen );


// Task 03


document.write("<h2>Task 03</h2>");


var word = "Pakistan"

var letter = prompt("String: '" + word + "' Find the index of letter: ");

var letterIndex = word.indexOf(letter);

document.write("String: " + word);

document.write("<br>");

document.write("Index of '" + letter + "' : " + letterIndex);


// Task 04


document.write("<h2>Task 04</h2>");


var word = "Hello, World!!!"

var letter = prompt("String: '" + word + "' Find the index of last letter: ");

var letterLastIndex = word.lastIndexOf(letter);

document.write("String: " + word);

document.write("<br>");

document.write("Index of last letter '" + letter + "' : " + letterLastIndex);


// Task 05


document.write("<h2>Task 05</h2>");


var word = "Pakistan"

var thirdIndexLetter = word.charAt(3);

document.write("String: " + word);

document.write("<br>");

document.write("Character at index 3 is : " + thirdIndexLetter);


// Task 06


document.write("<h2>Task 06</h2>");


var firstName = "Abdul"

var lastName = "Ahad"

var fullName = firstName.concat(' ', lastName);

var greeting = fullName.concat(', ', 'Asalam-u-alailum');

document.write(greeting);


// Task 07


document.write("<h2>Task 07</h2>");

var cityName = "Hyderabad"

var cityName1 = cityName.replace('Hyder', 'Islam');

document.write("City : " + cityName);

document.write("<br>");

document.write("After replacement: " + cityName1);


// Task 08


document.write("<h2>Task 08</h2>");


var message = "Ali and Sami are best friends. They play circket and football together.";

document.write("String: " + message);

document.write("<br>");

document.write("After replace 'and' in the string with '&'");

message = message.replaceAll('and', '&');

document.write("<br>");

document.write("String: " + message);


// Task 09


document.write("<h2>Task 09</h2>");

var value = "472"

document.write("Value: " + value);

document.write("<br>");

document.write("Type: " + typeof value);

value = parseInt(value);

document.write("<br>");

document.write("Value: " + value);

document.write("<br>");

document.write("Type: " + typeof value);


// Task 10


document.write("<h2>Task 10</h2>");

var userInput = 'peanuts'

document.write("User input: " + userInput);

userInput = userInput.toUpperCase();

document.write("<br>");

document.write("Upper case: " + userInput);


// Task 11


document.write("<h2>Task 11</h2>");

var userInput = 'javascript';

document.write("User input: " + userInput);

userInput = userInput[0].toUpperCase() + userInput.slice(1);

document.write("<br>");

document.write("Title case: " + userInput);


// Task 12


document.write("<h2>Task 12</h2>");

var num = 35.36

document.write("Number: " + num);

num = num * 100;

document.write("<br>");

document.write("Number: " + num);


// Task 13


document.write("<h2>Task 13</h2>");

username = '!';

document.write('ASCII code of ' + username + ' is '+ username.charCodeAt());

document.write("<br>");


username = ',';

document.write('ASCII code of ' + username + ' is '+ username.charCodeAt());

document.write("<br>");


username = '.';

document.write('ASCII code of ' + username + ' is '+ username.charCodeAt());

document.write("<br>");


username = '@';

document.write('ASCII code of ' + username + ' is '+ username.charCodeAt());

document.write("<br>");



// Task 14


document.write("<h2>Task 14</h2>");

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

loc = -1;

var searchByUserInput = 'apple pie'.toLowerCase()

for (let i = 0; i < A.length; i++) {

    if (A[i] == searchByUserInput) {

        loc = i
        break

    }     
}

if (loc > -1) {

    document.write(searchByUserInput + " is availabe at index " + loc + "in our bakery");

} 
else {

    document.write("We are sorry. " + searchByUserInput + " is not available in our bakery");
    
}


// Task 15


document.write("<h2>Task 15</h2>");


const letter = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz';

const number = '0123456789';

const specialChars = '!@#$%^&*()_+';

var passwordLen = 12;

var password = '';

password += letter.charAt(Math.floor(Math.random() * letter.length))

for (let i = 1; i < passwordLen; i++) {

    const charType = Math.floor(Math.random() * 3);


    if (charType === 0) {
        password += letter.charAt(Math.floor(Math.random() * letter.length))
    } else if (charType === 1) {
        password += number.charAt(Math.floor(Math.random() * number.length))
    } else {
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    }
    
}


document.write(password)

// Task 16


document.write("<h2>Task 16</h2>");

var university = "University of Karachi";

for (let i = 0; i < university.length; i++) {

    document.write(university[i] + "<br>");

}
       

// Task 17

document.write("<h2>Task 17</h2>");
