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
document.write("<br>")
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
var message = "Ali and Sami are best friends. They play circket and football together."
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
document.write("Type: " + typeof value)

value = parseInt(value);

document.write("<br>");
document.write("Value: " + value);
document.write("<br>");
document.write("Type: " + typeof value)