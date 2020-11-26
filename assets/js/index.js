//Variables
let cards = document.getElementsByClassName('.card');
let moves = document.getElementById('moves');
var openedCards = [];

for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", flipCard);
};

var flipCard = function() {
    this.classList.toggle("rotate")
}

//Game timer function
let time = document.getElementById('time');
let second = 0, minute = 0, hour = 0;
var interval;

function gameTime() {
    interval = setInterval(function() {
        time.innerHTML = minute+"minute "+second+"seconds";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
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
