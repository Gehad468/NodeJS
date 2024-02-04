//Create a function that takes any non-negative number as an array and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
function descending(arr)
{
    
 for(let i =0;i<arr.length;i++)
 {
    for (let index = i+1; index < arr.length-1; index++) {
      if (arr[i]<arr[index])
      { 
        let t=arr[i];
        arr[i]=arr[index];
       arr[index]=t; 
      }
    }
 }
 return arr;
}

console.log( descending([1,43,42,3,1]));