// Code your solutions in this file
//        writeCards()
//          returns an array of thank you messages for each name provided to the function:
const cards =["Guadalupe", "Ollie", "Aki"];
function writeCards(cards){
  let x = []
    for (let i=0; i < cards.length; i++) {
      x.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return x;
}
function countDown(x){
  while (x>=0){
    console.log(x)
    x--
  }
}


