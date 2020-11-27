//Variables
const cards = document.querySelectorAll('.card');
let moves = document.getElementById('moves');
var openedCards = [];

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  this.classList.toggle('rotate');
}

function timer () {
    let second = 0;
    var minute = 0;
    var timer = setInterval(function() {
        document.getElementById('time').innerHTML = minute + second;
        if(second == 60){
            minute++;
            second=0;
        }
    },1000)
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
