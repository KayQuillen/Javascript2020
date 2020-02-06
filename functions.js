function printConsole(user){
var name = user;
console.log(name);
//document.write(name)
document.getElementById("nameOutPut").innerHTML = name;
}



function phone(type,batteryLife,os,memory){
var status =  "Your "+ os  + type + " has " + memory + "GB memory left and " + batteryLife + "% battery left.";

document.getElementById("phoneOutPut").innerHTML=status
return status}
function main(name, age){
    var message;
    var user = name;
    if(age<10){
        message = user + " your just a kid"
    }
    else if(age<20){
        message = user +  " you're getting older"
    }
    else if(age>=20){
        message =  user + " you're old!"
    }
    else{message = user +  " enter a number please"}
console.log(message)
document.getElementById("statusOutPut").innerHTML=message;}
//main("Dan",22)
//main("Mary",12)
//main("Mick",4)
//main("Troy","six")