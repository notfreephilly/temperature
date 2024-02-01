// Write a function that converts celcius to fahrenheit

// Needs to take and convert input from prompt


// Update:
// Add area for user to add input
// Add ability to convert from both F to C and C to F - include a dropdown to choose from
// Ability to convert F - F and C - C
// Make sure decimals dont extend past one digit
// Put a cap on digits entered in input
// 
// Enhance styling
// Mobile responsive*

// Mercury bar, emojis maybe

let goButton = document.getElementById('btn').addEventListener('click', convertTemp);


function convertTemp() {
    let userInput = Number(document.getElementById('inp').value);
    let fahrenheit = (userInput * 9 / 5) + 32;
    let celsius = (userInput - 32) * 5 / 9;
    let errorMsg = "Please use a number";


    if (document.getElementById('unit').value === "f-deg" && document.getElementById('unit2').value === "f-deg2" || document.getElementById('unit').value === "c-deg" && document.getElementById('unit2').value === "c-deg2") {
        document.getElementById('output').innerHTML = userInput;
    }
    else if (document.getElementById('unit').value === "f-deg") {
        document.getElementById('output').innerHTML = celsius.toFixed(1);
    }
    else if (document.getElementById('unit').value === "c-deg") {
        document.getElementById('output').innerHTML = fahrenheit.toFixed(1);
    }
}