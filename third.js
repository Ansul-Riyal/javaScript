let no = 20;
if(no>0)		console.log("a is positive");
else if(no==0)	console.log("a is zero");
else		console.log("a is negative");


let age = 28;
if(age>=18) 	console.log("You can vote");
else 		console.log("Run away Kidoo!");

let a = 20;
let b = 3;
let c = 12;
if(a>b){
	if(a>c) console.log("a is greatest");
	else	console.log("c is greatest");
}
else console.log("b is greatest");

console.log(a>b? a>c? "A is great" : "c is great" : "b is greater");

let day = 1;
switch (day){
	case 1: console.log("Sunday yeah!!!"); break;
	case 2: console.log("Monday Nooo!!!"); break;
	case 3: console.log("Tuesday okk!!"); break;
	case 4: console.log("Wednesday ok!"); break;
	case 5: console.log("Thursday ok"); break;
	case 6: console.log("Friday !"); break;
	case 7: console.log("Saturday yeah!!"); break;
}

let grades = 99;

switch (true){
	case grades >=90: console.log("A"); break;
	case grades >=80: console.log("B"); break;
	case grades >=70: console.log("C"); break;
	case grades >=60: console.log("D"); break;
	case grades <40: console.log("F"); break;
}

console.log(a%2 == 0? "a is even": "a is odd");

let year = 2030;
console.log(year%4==0? "leap year" : year%400==0 && year%100!=0? "Leap year" : "not a leap year");
