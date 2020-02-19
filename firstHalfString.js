
// Given a string of even length, return the first half. So the string "WooHoo"
// yields "Woo".
// firstHalf("WooHoo") → "Woo"
// firstHalf("HelloThere") → "Hello"
// firstHalf("abcdef") → "abc


var a = "WooHoo"
var b = "HelloThere"
var c = "abcdef"

console.log(a.slice(0,3))
console.log(b.slice(0,5))
console.log(c.slice(0,3))