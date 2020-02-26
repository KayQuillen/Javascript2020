

function numGrade(grade){
    if(grade >= 90 && grade <= 100){
        console.log("You got an A")
    }if(grade >= 80 && grade < 90){
        console.log("You got a B")
    }if(grade >= 70 && grade < 80){
        console.log("you got a C")
    }if(grade >= 60 && grade < 70){
        console.log("You got a D")
    }else if(grade < 60){console.log("you Failed")
    }   
}
numGrade(75)
numGrade(97)
numGrade(70)
numGrade(60)
numGrade(58)
numGrade(82)
