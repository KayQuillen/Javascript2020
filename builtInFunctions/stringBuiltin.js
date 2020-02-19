var a,b,c,d,e,f,g;
a = "Kay Quillen";
b = "  somecar  ";
c = "somehouse";

console.log(a.length); // 11
console.log(a.charAt(a.length-1)) // n
console.log(c.charAt(c.length-1)) // e
console.log(a.concat(b)); //Kay Quillensomecar
console.log(a+b); // Kay Quillensomecar

console.log(a.endsWith("yy")) // false
console.log(a.endsWith("en")) //true
console.log(c.includes("o")) // true
console.log(c.lastIndexOf("o")) // 5
console.log(c.indexOf("o")) // 1
console.log(c.charCodeAt("2")) // 109
console.log(a.toLowerCase()) // kay quillen
console.log(a.toUpperCase()) // KAY QUILLEN
console.log(a.repeat(4)) // prints however many times you tell it
console.log(a.split("")) // makes it an array based on where you tell it to split, ie:no quote,quote, quote with space
console.log(a.startsWith("e")) // false
console.log(a.startsWith("K")) // true
console.log(a.substr(2,5)) // y Qui, inclusive, start at 2 and moves 5 spaces including the 5th place
console.log(a.substring(2,6)) // y Qu, exclusive, start at 2 and ends at 6 excluding 6
console.log(b.trim())
console.log(b.replace(" ","<<").replace(" ","<<").replace(" ",">>").replace(" ",">>"))// <<<<somecar>>>>
console.log(c.search("house"))// tell index place where it starts