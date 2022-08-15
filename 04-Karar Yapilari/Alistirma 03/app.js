/*
    Hackerrank: Day 3: Intro to Conditional Statements Example
Task:
Given an integer,n , perform the following conditional actions:

If n is odd, print Weird
If n is even and in the inclusive range of 2 to 5, print Not Weird
If n is even and in the inclusive range of 6 to 20, print Weird
If n is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.

Input Format
A single line containing a positive integer,n .

Constraints:
1 <= n <= 100

Output format:
Print Weird if the number is weird; otherwise, print Not Weird.

*/


let n = prompt("Enter in the range of 1 to 100 ")

if (1 > n || n > 100) {
    console.log("Enter in the range of 1 to 100")
}
else if (n % 2 === 0) {
    if (n >= 2 && n <= 5) {
        console.log("Not Weird");
    } else if (n >= 6 && n <= 20) {
        console.log("Weird");
    } else if (n > 20) {
        console.log("Not Weird");
    }
}
else if (n % 2 === 1) {
    console.log("Weird");
}

