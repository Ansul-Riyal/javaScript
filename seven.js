let book = {
	'title'  : "Loard of the Rings",
	'author' : "Rahul Gandhi",
	'year'   : 1872
};
console.log(book);
console.log(book.title +'\n' +  book.author);

book.getName = function() {
	return `Name: ${book.title}, Author: ${book.author}`; 
}
console.log(book.getName());

book.updateYear = function(n) {
	book.year = n;
}
book.updateYear(227);
console.log(book);

let library = {
	name: "Space Library",
	books: [{
        	'title'  : "Loard of the Rings",
       		'author' : "Rahul Gandhi",
        	'year'   : 1872
	},
	{
		'title'  : "The Witcher",
		'author' : "Akshay Raj",
		'year'   : 2000
	}]
};
console.log(library);
console.log(library.name);
library.books.forEach(i => console.log(i.title));

book.bookInfo = function() {
	return `Name: ${this.title}, Year: ${this.year}`;
}
console.log(book.bookInfo());

for( let x in book){
	console.log(x, book[x]);
}

Object.keys(book).forEach(i => console.log(i));
Object.values(book).forEach(i => console.log(i));
