// Write a function that converts celcius to fahrenheit

// Needs to take and convert input from prompt



function convertTemp() {
    // convert input from prompt into a number - this will be celcius
    let celsius = Number(prompt('Give me a number'));

    // using a formula to convert the value from the celcius variable to fahrenheit, storing it in the temperature variable
    let temperature = (`${celsius}` * 9 / 5) + 32;

    // going inside the HTML and displaying the value of temerature in the element with the ID of 'converted'
    document.getElementById('converted').innerHTML = temperature;
}