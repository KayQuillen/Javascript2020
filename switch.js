//!switching with numbers
var input = 30;
    var number ="";
    switch(input){
        case 1 : number = "one";
        console.log(number);
        break;
        case 2: number = "two";
        console.log(number);
        break;
        case 3: number = "three";
        console.log(number);
        break;
        default: number = "Not a valid number";
        console.log(number)
        break;

    }
    //? switching with Booleans
    var input2 = false;
    switch(input2){
        case true:
            console.log("I was true, now I'm not.");
            input2 = false;
            break

        case false:
            console.log("I wasn't true, now I am.");
            input2 = true;
            break

        default: 
            console.log("I'm not wrong or right?!?!");
            break

    }
    //*switching with strings
    var input3 = "hello";
    var message = ""
    switch(input3){
        case "hello":
            message =" Hey there, what's your name?";
            console.log(message)
            break;
        case "bye bye":
            message =" See you later";
            console.log(message)
            break;
            

    }