let age = 2;
let name = "Yashu";
console.log(`Hey there old man ${name}, you turned ${age} years old now.`);

const str = `This is a multi line 
string and its easy
to write it`;
console.log(str);

const [first, second] = [1,2,3,,5];
console.log(first,second);

let book = {
	title: "AutoBioGraphy of Papu",
	author: "Papu",
	price: 5
}
const {title, author} = book;
console.log(title,author);

let a = [1,2,4,3];
const ar = [...a,5,6,7];
console.log(ar);

function sum(...input) {
	let sum =0;
	for(let num of input) 
		sum += num;
	return sum;
}
console.log(sum(1,2,3,4,5));

function product (num,nums=10) {
	return num*nums
}
console.log(product(90));

const year = "age";
const obj = {
	name : "Jake",
	id : 2,
	[year] : 25
}
console.log(obj);
console.log(obj[year]);

const mark1 = "Maths";
const mark2 = "Science";
const Mark = {
	[mark1] : 40,
	[mark2] : 39
}
console.log(Mark);
