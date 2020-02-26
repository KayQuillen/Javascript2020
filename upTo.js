function range(upto){
    var result = []
for(var i = 0; i <= upto; i++)
    result[i]=i 
return result

}console.log(range(6))

var mack = []
mack.push("Mack")
mack.push("the")
mack.push("knife")
console.log(mack.join(" "))
console.log(mack.pop())
console.log(mack)

 var letter = ["a","b","c d"]
var misc = ["pets taste like chicken"]
var array =["pets","don't","taste","like","chicken"]
console.log(misc.join(" ").split(" "))
console.log(array.join(" "))
//console.log(misc.split("").join(""))
console.log(misc.join(" "))
console.log(misc.join(misc).split(misc))
//console.log(misc.split(" "))
console.log(letter.join(" ").split(" "))

function startsWith(string, pattern){
  return string.slice(0,pattern.length) == pattern
}console.log(startsWith('I got a nickle in my drawer and took it to the store, then spent it on a candy.','The dog got out and ran away yesterday. She came back last'))

var foo = "foo:bar"
console.log(foo.indexOf(":"))