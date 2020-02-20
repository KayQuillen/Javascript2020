commonS()
function commonS(){
    
var x = [9,8,7,6,3,2,7]
var y = [9,0,7,1,8,4,5]
var commonS = []

for (var i = 0; i < x.length; i++){
    for(var j = 0; j < y.length; j++){
        if(x[i] === y[j]){
         commonS[commonS.length] = x[i]
    
}
}
}console.log(commonS)
}