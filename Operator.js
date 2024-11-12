let a = 5;
let b = 2;

// Airthemetic operator in js

console.log("a = ", a," & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = " ,a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a ** b =",a ** b);
console.log("a % b = ",a % b);

//comparison operator in js

console.log("5 >= 2",a >= b);
console.log("5 <= 2",a <= b);
console.log("5 == 2",a == b);
console.log("5 != 2",a != b);

//logical operator in js 

let cond1 = a > 6;
let cond2 = b ===2;
console.log("cond1 && cond2",cond1 && cond2);

let cond3 = a > b;
let cond4 = b == 3;
console.log("cond3 || cond4",cond3 || cond4);

//conditional operator in js

let age = 18;

if (age >= 18)
{
    console.log("you can vote");
}

if(age < 18)
{
    console.log("you can not vote");
}


let mode = "dark";
let colour;

if (mode === "dark")
{
    colour = "black";
}

if(mode === "light")
{
    colour = "white";
}
console.log(colour);

let num = 4;

if( num % 2 === 0)
{
    console.log(num,"even");
}
else{
    console.log(num,"odd");
}
