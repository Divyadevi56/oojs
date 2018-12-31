function doGet(one:number,two=5,three?:number):void
{
console.log(one);
console.log(two);
console.log(three);

console.log(one+two+three);
}
doGet(10,2,9);