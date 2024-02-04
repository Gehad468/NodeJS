//Create a function that takes an array of numbers and returns the average of this numbers
function avg(arr)
{
    let avg=1;
    let sum=0;
  for (let index = 0; index < arr.length; index++) {
    sum+=arr[index];
  }
  avg = sum/arr.length;
  return avg;
}

console.log(`the Average = ${avg([1,2,3,4,5])}`);

