//Variables
let cards = document.getElementsByClassName('.card');
let moves = document.getElementById('moves');
let time = document.getElementById('time');
var openedCards = [];



for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", flipCard);
};

var flipCard = function() {
    this.classList.toggle("rotate")
}








//Shuffle Function - ensures that the card arrangement is never the same
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array
};
