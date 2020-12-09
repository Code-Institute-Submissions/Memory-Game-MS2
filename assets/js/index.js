//Variables
const cards = document.querySelectorAll('.card');
const timer = document.querySelector('.time');
let moves = document.getElementById('moves');
let flippedCard = false;
let cardLock = false;
let firstFlip, secondFlip;
let counter = document.querySelector(".moves");
let second = 0;
let minute = 0;
let maximumNumberOfMatches = 0;
let formattedSecond;

function countMatches () {
    maximumNumberOfMatches++

    if (maximumNumberOfMatches == 8) {
        gameOver();
    }
    console.log(maximumNumberOfMatches);
}

//flipCard Function - this function allows the cards to be flipped over
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
    gameMoves()
    checkForPotentialMatch (); 
  }

//Function to check if the cards have matched
function checkForPotentialMatch () {
    if (firstFlip.dataset.name === secondFlip.dataset.name) {
        matchedCards();
        countMatches();
    }   else {
        unmatchedCards();
    }
}

//This function will occur when the cards the user clicks are a match
function matchedCards () {
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);

    cardReset ();
}

//This function will occur when the cards the user has clicked arent the same causing them to be unmatched
function unmatchedCards () {
    cardLock = true;

    setTimeout(() => {
    firstFlip.classList.remove('rotate');
    secondFlip.classList.remove('rotate');

    cardReset ();
    },1000)
}

//This fucntion stops the user from double clicking on the cards
function cardReset () {
    [flippedCard, cardLock] = [false, false];
    [firstFlip, secondFlip] = [null, null];
}


//Fisher-Yates Shuffle Function.
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


//Shuffle Function - run shuffle function through cards to ensure card arangement is never the same
function shuffleCards () {
  cards.forEach(card => {
    let randIndex = Math.floor(Math.random() * 16);
    card.style.order = randIndex;
  });
}

//Function to start a new game
function resetGame () {
    shuffleCards();

    //reset the number of game moves so it starts from 0 again
    moves = 0;
    counter.innerHTML = moves;
    //reset the game timer so the time starts from 0:00 
    second = 0;
    minute = 0; 
     //remove all rotate classes
     for (var i = 0; i < cards.length; i++){
    cards[i].classList.remove('rotate');
     }
    cards.forEach(card => card.addEventListener('click', flipCard));
}

//Game Timer Function - this function will increase the number of seconds and once the seconds hit 60, the minute will increment by 1
function gameTimer () {
    setInterval(function() {
        formattedSecond = ("0" + second).slice(-2);
        timer.innerHTML = `${minute}:${formattedSecond}`;
        if(second == 60){
            minute++;
            second=0;
        }
        second++;
    },1000)
}
    

//Game Moves Function - this function will increment by one after every second flip, will allow the user to see how many moves he has completed the game in
function gameMoves () {
    moves++;
    counter.innerHTML = moves;
}

//Game Over Function - this function will be called when the user has completed the game causing the modal to appear. 
function gameOver () {
    $('#congratulationsMessage').text(`You completed the game in ${minute} mins ${formattedSecond} secs, with a total of ${moves} moves!`);
    $('#congratulationsModal').modal('toggle');
}


cards.forEach(card => card.addEventListener('click', flipCard));

shuffleCards();