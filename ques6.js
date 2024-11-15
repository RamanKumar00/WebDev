let marks = [89,87,65,45,87];
let sum = 0;

for(val of marks)
{
    sum = sum + val;
}
console.log(sum);

let avg = sum / marks.length;
console.log("avg marks of the class is: ",avg);