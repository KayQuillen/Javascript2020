function pluralize(num,n){
    if(num > 1 || num < 1){
        console.log(num + " " + n + "s")
    }if(num == 1){
        console.log(num + " " + n)
    }
}
pluralize(5,"cat")
pluralize(1,"cow")
pluralize(0,"bike")