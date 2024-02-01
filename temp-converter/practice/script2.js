// function
let counter = 0;

function increaseCount() {
    counter++;
    if (counter <= 5) {
        console.log('Counted!');
    } else {
        console.log('Done');
    }
}

// increaseCount();


function decreaseCount() {
    counter--;
    if (counter <= 5) {
        console.log('Counted!');
    } else {
        console.log('Done');
    }
    // counter--;
}

function sayHi() {
    let userName = prompt('Enter your name');

    console.log('Welcome ' + userName);
}

// function multiplyThree() {
//     // get number from prompt
//     // multiply input from prompt by 3
//     // display result on console

//     let userInput = prompt('Enter your number');
//     console.log(`Your number is ` + (Number(userInput) * 3));
// }
function multiplyThree() {
    // get number from prompt
    let userInput = prompt('Enter your number');

    // multiply input from prompt by 3
    let result = userInput * 3;
    // display result on console

    document.getElementById('total').innerHTML = result;
}


// create a function that adding up two numbers (get them from the prompt)

function addTwo() {
    let numAdd = Number(prompt('Enter thy number: '));
    let sum = numAdd += 2;
    console.log(sum);
}