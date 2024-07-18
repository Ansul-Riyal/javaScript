let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[1],arr[arr.length-1]);

arr.push(6);
console.log(arr);
arr.pop(6);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);

const newarr = arr.map(i => i*i)
console.log(newarr);

const earr = arr.filter(i => i%2 === 0);
console.log(earr);


const sum = arr.reduce((prev, ele)=>prev+ele,0);
console.log(sum);

for(let i=0;i<arr.length;i++)
	console.log(arr[i]);

arr.forEach((ele)=> console.log(ele));

let tarr = [[1,2],[3,4],[5,6]];
console.log(tarr);
console.log(tarr[2][1]);
