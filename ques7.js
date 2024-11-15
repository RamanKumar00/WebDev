let items = [250,345,120,50,45];

let i = 0;
for(let val of items)
{
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}