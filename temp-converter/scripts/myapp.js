// DB information

let userDB = "philDB";
let passDB = "badpassword";

function login() {
    // get user/pass from user using a prompt
    let dbPrompt1 = prompt('Enter username:');
    let dbPrompt2 = prompt('Enter passowrd:');

    // compare the passDB with the variable
    if (dbPrompt1 === userDB && dbPrompt2 === passDB) {
        document.getElementById('notifications').innerHTML = "<p>Welcome </p>";
    } else {
        document.getElementById('notifications').innerHTML = "<p class='alert-error'>Invalid username or password </p>";
    }





    // display on the html welcome to the system of invalid credentials
}