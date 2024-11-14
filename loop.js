//for loop 
// let sum = 0;

// for(let i=1;i<=5;i++)
// {
//     sum = sum + i;
// }
// console.log(sum);

// while loop
// let i=1;
// let s = 0;

// while(i<=5)
// {
//    s = s + i;
//    i++;
// }
// console.log("sum is : ",s);

//do-while loop

// let i=10;
// do{
//     console.log("i m trying");
// }
// while(i>=20)
// {
//     console.log("i m getting bored");
//     i++;
// }

//for of loop
// let str = "raman";

// let size = 0;
// for(let i of str)
// {
//     console.log("i= ",i);
//     size++;

// }
// comsole.log("size of string: ",str);

//for in loop

let student = {
    name :"raman kumar",
    age : 18,
    cgpa : 6.5,
    ispass : true,
};
for( let key in student)
{
    console.log("key=" ,key, "value=",student[key]);
}