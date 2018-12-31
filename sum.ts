function sumAll(...num:number[])
{
let sum:number=0;
for(let data of num)
{
sum=sum+data;

console.log("Addition "+data);
}
console.log("Sum is"+sum);
}
sumAll(6,7,);