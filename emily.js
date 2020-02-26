function addToSet(set, values){
    for(var i = 0; i < values.length; i++)
    set[values[i]] = true
}
function removeFromSet(set, values){
    for (var i = o; i < values.length; i++)
    delete set[values[i]]
}


function catNames(paragraph){
    var colon = paragraph.indexOf(": ")
    return paragraph.slice(colon+2).split(", ")

}//console.log(catNames("born 2-/09/204 (mother Yellow Bess): " + "Doctor Hobbles the 2nd, Noog"))

//var today = new Date(02,25,2020)dates must be placed year, month, day
//console.log(today)output 1909-08-12

function retrieveMails(){
    var mail = [];
    return mail;
}

function extractDate(paragraph){
    function numberAt(start, length){
        return Number(paragraph.slice(start,start+length))
    }
    return new Date(numberAt(11,4),numberAt(8,2)-1,numberAt(5,2))
}console.log(extractDate("died 27/04/2006: Black Leclere"))

function startsWith(string, pattern){
    return string.slice(0,pattern.length) == pattern
  }
function findLivingCats(){
    var mailArchive = retrieveMails()
    var livingCats = {"Spot": true}

function handleParagraph(paragraph){
    if(startsWith(paragraph, "born"))
        addToSet(livingCats, catNames(paragraph))
        // var names = catNames(paragraphs[paragraph])
        // for(var name =0; name <names.length; name++)
        // livingCats[names[name]] = true
    else if(startsWith(paragraph, "died"))
        removeFromSet(livingCats, catNames(paragraph))
        // var names = catNames(paragraphs[paragraph])
        // for(var name = 0; name < names.length; name++)
        // delete livingCats[names[name]]
}
    for(var mail = 0; mail < mailArchive.length; mail++){
        var paragraphs = mailArchive[mail].split("\n")
        for (var i = 0;
            i < paragraphs.length; i++) 
            handleParagraph(paragraphs[i])
                }
                return livingCats
        }
    var howMany = 0;
    for (var cat in findLivingCats())
    howMany++;


console.log("There are " + howMany + " cats ")