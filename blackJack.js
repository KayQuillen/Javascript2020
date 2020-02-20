//Given 2 int values greater than 0,
//return whichever value is nearest to 21 without going over.
//Return 0 if they both go over.
 blackjack(19, 21)
 blackjack(21, 19) 
 blackjack(19, 22) 
 blackjack(23, 22) 

    function blackjack(a,b){
        if(a >= 22 && b >= 22){console.log("Bust")}
            if(a <= 21){}
            if(b <= 21){}
            if(a  <= 21 && b <= 21) {console.log(Math.max(a,b))}}