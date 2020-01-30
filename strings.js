function Help(){
document.getElementById("demo").innerHTML = "Thanks for helping me."
alert("Thank you for saving me from that chicken!")
}
function dontHelp(){
document.getElementById("demo").innerHTML = "Why won't you help?!?!"
alert("It's going to peck me!!")
}

function entName(){
    var enteredName = document.getElementById("nameentered").value;
    document.getElementById("name").innerHTML = enteredName;
}