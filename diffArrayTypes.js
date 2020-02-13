var bookshelf =[true,372,"works",92.94,3e5];
var out;
var oldRecord = [" lazy ", "days ","make ","everyone ", "over ", 35, " happy ","!!"]
function sounds(score){
    for(var i=0; i< score.length; i++){
        console.log(score[i]);
     if (score[i] != true){
         out += score[i];
     }else{
        console.log(" Im true");
     }}if(score.length >= 6){
        score.push(out);
        console.log(out);
     //sounds(score)
     }
    }
sounds(oldRecord);
//sounds(bookshelf)
