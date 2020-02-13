// functions can have any name, they are just place holders.
// the parameters for functions can have any name, they are just place holders.
// keyword, name, parameter, what you want the function to do
function name(someArray){
    for(var i = 0; i < someArray.length; i++){
        console.log(someArray[i])
    }
}
var sodaTypes =["orange","grape","straw","peach","lemon lime"]
name(sodaTypes) // giving the function its parameter here//

function favChips(x){
    for(var i = 0; i < x.length; i++){
        if(x[i].length>6){
            console.log(x[i])}
            else{console.log(" Found some bad chips at : " + i)
        }
    }
}

var shelf = ["Cheetos","Frito","Lays","Dorittos","Pringles","Bugglers","Takis","Sea Salt and Vin"]
favChips(shelf) // giving the function its new parameter here

function speak(xyz){
    console.log(xyz)
}speak("hey its me!")
function walk(cde){
    console.log(" you took " + cde + " steps")
}walk(30)
function blank(something){
    if( something ==""){
        console.log("How did you know?")
    }
}var nothing = []; blank(nothing)

function specs(x,y,z){
    if( y > x && z < x){
        var message = y + " is greater"
        console.log(message)
        }else if (x > y || y > z){
            console.log(" Who cares!")
        }else if ( z != x || y){
            console.log( z + " is not equal to the others")
        }
        var trash = x + y + z
        if(trash > y){
            console.log(trash)
        }
    }
specs(34,36,82)
specs(44,12,32)
