# Milestone Project 2

[Live Link to project here](https://rishisood1.github.io/Memory-Game-MS2/)

This is my second project for Code Institute. For my project I decided to make a memory game in which users would try to make matches with the cards in order to complete the game in the shortest amount of time and least number of moves. 
The user will click on the cards and if they match the cards will stay open and if they do not the cards will flip back round. 
Once all the cards have been matched a modal will appear on the screen. 
The modal will consist of the number of moves the user did and how long it took them to complete the game. 
The game was created to be suitable for all ages.

## UX

I wanted to keep the design of the game as intuitive and simple as possible. To do this I decided on a basic yet bold design which I believed would be the best way forward. 
The page has a white background with the text being black. I used Exo as the font throughout the page as I believe the font stands out well. 
The page also has a modal appear once the user has completed the game, this saved me creating a new page just to display a congratulations message.

The game is made up of a 4 by 4 grid. The back of the cards all have the same design on them while the front of the cards are different to each other. 
To flip the card, I had to use JavaScript in which I will talk about in detail below. 

### User Stories 

* As a user I want to play a memory game in which I must match up cards in the fewest amount of moves and least amount of time. 
* As a user I expect there to be a timer so I can see how long I have taken to complete the game as well as a counter to see ho many moves I have taken. 
* As a user I would expect the game to be able to be played on any devices and the design remains the same even though they are on different screen sizes.
* As a user I expect there to be an option which allows me to restart the game.
* As a developer, I want to create a game which can be played by people of any age and can enjoy themselves.

### Wireframes

I created my wireframes on Figma. I first designed the basic layout of the webpage, once that was done, I started adding colours to see how it would look before deciding on my final colour scheme.

[Figma Wireframes](https://www.figma.com/file/K1UwoM441RtYMO9m1scFmV/Memory-Game---MS2?node-id=0%3A1)

## Features

* Feature 1 – A Memory Game – The main feature is the memory game which has been created for the user to enjoy. 
* Feature 2 – Randomised tile placements – A key component of the game is that the tiles are randomised when a new game is started, this is required otherwise the tile placements would remain the same and there would not be any point in the game as the user would know where the tiles are. 
* Feature 3 – A modal which appears at the end of the game – the modal which appears at the end of the game allows the user to see their game statistics, it also allows the user to play the game again by clicking a button.  The modal allows me to display data on the same screen instead of creating a new page just to display the users game statistics
* Feature 4 – A timer and move counter – With the main aim of the game to try and complete it in the least amount of time and least number of moves, the timer and counter allows the user to see how they are getting along. This data is also displayed in the modal at the end of the game
* Feature 5 – Restart and start button – The buttons at the top of the page allow the users to start the game. If they do not click the start button, the timer would not run so it is imperative that they do. The restart button allows the users to restart the game, if clicked the timer and move counter will reset and the cards will shuffle. 

### Features left to implement

One feature that I would like to implement would be to increase the grid size, so the game becomes a bit more difficult as they must remember more cards.
Another feature is the option of difficulty levels. To make the game more difficult I could increase the grid size as mentioned above or even reduce the times between the card being clicked and when it flips back over for the user to have less time to remember what logo is on each card. 
