function CheckOddEven(n) {
	if(n%2 == 0) console.log(n + " is Even");
	else console.log(n + " is Odd");
}
let m = 10;
CheckOddEven(m);

function Square(n) {
	console.log(n*n);
}
Square(m);

let a = 2;
let b = 3;

function Greater(a, b) {
    a > b ? console.log(a) : console.log(b);
}
Greater(a,b);

const ConcatStr = (c,d) => c+d;
console.log(ConcatStr("Hello ", "World"));

const sum = (a,b) => a+b;
console.log(sum(a,b));

let st = "World";
const str = st => st.split('').some(i => i === 'a');
console.log(str(st));

function Product(a, b=1){
	return a*b;
}
console.log(Product(a));

function getNameage(age, name) {
	console.log("Hello " + age + " years old "+name);
}
getNameage(23,"Luis");

const nofun = ()=>console.log("Hello");
function Call(a,n) {
	if(n==0) return;
	a();
	Call(a,n-1);
}
Call(nofun,4);

let n = 4;
const y = (n)=>{ while(n >0) {console.log("Cup");n--}}
const x = (n)=>{ return n*n; }
function Twofun(a,b,n) {
	b(a(n));
}
Twofun(x,y,n);
