//Variables
const cards = document.querySelectorAll('.card');
let moves = document.getElementById('moves');
let flippedCard = false;
let cardLock = false;
let firstFlip, secondFlip;
let counter = document.querySelector(".moves");


function flipCard() {
    if (cardLock) return;
    if (this === firstFlip) return;

  this.classList.add('rotate');

  if (!flippedCard) {

    flippedCard = true;
    firstFlip = this;

    return;
  } 

    secondFlip = this;

    checkForPotentialMatch (); 
  }

//Function to check if the cards have matched
function checkForPotentialMatch () {
    if (firstFlip.dataset.name === secondFlip.dataset.name) {
        matchedCards();
    }   else {
        unmatchedCards();
    }
}

//Function when the cards match
function matchedCards () {
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);

    cardReset ();
}

//Function when the cards dont match
function unmatchedCards () {
    cardLock = true;

    setTimeout(() => {
    firstFlip.classList.remove('rotate');
    secondFlip.classList.remove('rotate');

    cardReset ();
    },800)
}

//Function to avoid double clicking on cards
function cardReset () {
    [flippedCard, cardLock] = [false, false];
    [firstFlip, secondFlip] = [null, null];
}


//Function to start a new game
function init () {

    
}


//Game Timer Function
let second = 0;
var minute = 0;
var timer = document.getElementById('.time');
function gameTimer () {
    setInterval(function() {
        document.getElementById('time').innerHTML = minute + second;
        if(second == 60){
            minute++;
            second=0;
        }
    },1000)
}
    

//Game Moves Function
function gameMoves () {
    moves++;
    counter.innerHTML = moves;
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


cards.forEach(card => card.addEventListener('click', flipCard));