 let number = 8
        
        if (number % 2 == 0) {
            console.log(number + " is Even.");
        } else {
            console.log(number + " is Odd.");
        }
        
        

number = -5

        if (number > 0) {
            console.log(number + " is Positive.");
        } else if (number < 0) {
            console.log(number + " is Negative.");
        } else {
            console.log("The number is Zero.");
        }


   
let balance = 10000;
let withdrawalAmount = 2000;

if (withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
    console.log("Invalid withdrawal amount.");
} 
else if (withdrawalAmount > balance) {
    console.log("Insufficient funds.");
} 
else {
    balance - withdrawalAmount;
    console.log("Transaction successful.");
    console.log("Remaining balance: " + balance);
}
 
// Using a for loop
for (let i = 50; i >= 1; i--) {
    console.log(i);
}
let correctPIN = "1234"; // Set your correct PIN here
let attempts = 3;

while (attempts > 0) {
    let userPIN = prompt("Enter your ATM PIN:"); // Ask user for PIN

    if (userPIN === correctPIN) {
        alert("Access granted");
        break; // Exit loop if correct
    } else {
        attempts--;
        if (attempts > 0) {
            alert("Wrong PIN! You have " + attempts + " attempt(s) left.");
        } else {
            alert("Account blocked");
        }
    }
}