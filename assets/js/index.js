//Variables
const cards = document.querySelectorAll('.card');
let moves = document.getElementById('moves');
let flippedCard = false;
let firstFlip, secondFlip;


cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  this.classList.add('rotate');

  if (!flippedCard) {

    flippedCard = true;
    firstFlip = this;
  } else {
    flippedCard = false;
    secondFlip = this;

    checkForPotentialMatch ();
    
  }
}

function checkForPotentialMatch () {
    if (firstFlip.dataset.name === secondFlip.dataset.name) {
        matchedCards();
    }   else {
        unmatchedCards();
    }
}

function matchedCards () {
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);
}

function unmatchedCards () {
    setTimeout(() => {
    firstFlip.classList.remove('rotate');
    secondFlip.classList.remove('rotate');
    },800)
}


//StartGame - Function to start a new game

//Game Timer Function
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

//Game Moves Function

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
