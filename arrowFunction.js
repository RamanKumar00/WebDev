//compact way to use the function 

//for multiplication 
const arrowMul = (a,b) =>
{
    console.log(a*b);
}

//for addition

const arrowSum = (a,b) =>{

    console.log(a+b);
}

// function inside function (for each ) used in case of array for each element

let arr = [1,2,3,4,5];

arr.forEach((val)=>
{
    console.log(val);
});

let arr1 = ["pune","delhi","rajkot","kolkata","chandigarh"];

arr1.forEach((val)=>
{
    console.log(val);
});

//to convert the alll the element of arrray in uppercase

let arr2 = ["raman","kumar","aaditya","aanokhi","sartaj"];
arr2.forEach((val,idx,arr2) => {
    console.log(val.toUpperCase(),idx ,arr2);
})
