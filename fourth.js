for(i = 1; i <= 10; i++){
	console.log(i);
}

console.log();

for(i = 1; i<=10; i++){
	console.log(5*i);
}

console.log();

let sum =0;
let j = 1;
while(j<=10){
	sum += j;
	j++;
}
console.log(sum);

console.log();

j=10;
while(j > 0){
	console.log(j);
	j--;
}

console.log();

do{
	j++;
	console.log(j);
}while(j<5);

console.log();

let fact = 1;
let d = 5;
do{
	fact *=d;
	d--;
}while(d>0)
console.log(fact);

console.log();

for(x=1; x<=5; x++){
	let str = "";
	for(y=0; y<x; y++){
		 str += "* ";	
	}
	console.log(str);
}

console.log();

let a = 0;
while(a<10){
	a++;
	if(a == 5) continue;
	console.log(a);
}

console.log();

a = 1;
while(a<=10){
	if(a == 7) break;
	 console.log(a);
	a++;
}
