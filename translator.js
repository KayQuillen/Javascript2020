function helloWorld(language){
    switch(language){
        case "de":
            console.log("hello world in German is hallo welt")
            break
        case "zh":
            console.log("hello world in Mandarin is ni hao, shijie")
            break
        case "es":
            console.log("hello world in Spanish is hola mundo")
            break
        default:"en"
        console.log("Not a valid language selection")
    }

}
helloWorld("zh")
helloWorld("de")
helloWorld("Ru")
helloWorld("es")