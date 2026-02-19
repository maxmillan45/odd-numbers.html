
let fact = 1;

if (n < 0) {
    console.log("Factorial does not exist for negative numbers.");
} else {
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of " + n + " is " + fact);
}
