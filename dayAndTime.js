// This JS page will be a util for other HTML pages



//?         var start = new Date()
//!          console.log(start)


function dandt(){
    var dt = new Date();
    var today = (dt.getMonth()+1)+"-"+dt.getDate()+"-"+dt.getFullYear()

console.log(today)
var time = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
console.log(time)
document.getElementById("time").innerHTML = today + " " + time;

}

