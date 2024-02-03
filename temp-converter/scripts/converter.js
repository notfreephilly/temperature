// [x] Add area for user to add input
// [x] Add ability to convert from both F to C and C to F - include a dropdown to choose from
// [x] Ability to maintain F - F and C - C
// [x] Make sure decimals dont extend past one digit
// [x] Put a cap on digits entered in input
// [x] Enhance styling
// [ ] Display error message
// [ ] Mobile responsive
// [ ] Mercury bar, emojis maybe


// const welcomeMsg = alert("Welcome! The creator of this page thanks you for coming to his page. Use this temperature converter to it's fullest ability and provide feedback as best you can! Have a good day.");

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




let rangeButton = document.getElementById('range-btn').addEventListener('click', convertTemperatureRange);

function convertTemperatureRange() {
    const startValue = Number(prompt("Enter a number that will start your temperature range"));
    const endValue = Number(prompt("Enter a number that ends your temperature range"));
    const scale = prompt("Enter in C or F for the temperature you would like to convert from.");

    for (let i = startValue; i <= endValue; i++){
        if (scale === "C" || scale === "c") {
            let fahrenheit = (i * 9 / 5) + 32;
            document.getElementById('range-result').innerHTML += `<p>${fahrenheit.toFixed(1)}</p>`;
            console.log(fahrenheit.toFixed(1));
        }
        else if (scale === "F" || scale === "f") {
            let celsius = (i - 32) * 5 / 9;
            document.getElementById('range-result').innerHTML += `<p>${celsius.toFixed(1)}</p>`;
            console.log(celsius.toFixed(1));
        }
    }
}

// convertTemperatureRange(startValue, endValue, scale);