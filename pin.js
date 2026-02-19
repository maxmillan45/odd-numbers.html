let correctPIN = "444"; 
let attempts = 3;

while (attempts > 0) {
    let userPIN = prompt("Enter your ATM PIN:"); 

    if (userPIN === correctPIN) {
        alert("Access granted");
        break; 
    } else {
        attempts--;
        if (attempts > 0) {
            alert("Wrong PIN! You have " + attempts + " attempt(s) left.");
        } else {
            alert("Account blocked");
        }
    }
}