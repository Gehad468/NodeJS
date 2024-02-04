
//** Create a function that takes an array of numbers and returns the smallest number in the set.
function mini(arr)
{
let min=arr[0];
for(let i =1;i<arr.length;i++)
{
    if(min>arr[i])
    min =arr[i];
}
console.log(`Minimum = ${min}`);
}
mini([3,2,5,4]);