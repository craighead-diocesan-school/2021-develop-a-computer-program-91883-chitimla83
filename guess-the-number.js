// Your code goes in this file.

// alert the name of the game  
alert("This is a guess the number game")
//ask for user name
let username = prompt('Whats your name?')

// generate a random number
let ranNum = Math.floor(Math.random() * 20) + 1;

// tells you the random number (remove later)
alert(ranNum)

// ask the user to guess a number
alert("I'm thinking of a number between 1- 20 ")

// validate and make sure uername is name and number is a number
let guess = 0


while (guess != 3) {
  // add one to the thier the guesses so that the loop stops at 3
  guess += 1
  //ask for user input
  let userNumber = prompt('guess a number')
  //convert user input to a number
  userNumber = Number(userNumber)
// check the suer answer 
  if (userNumber == ranNum) {
    alert('that is correct')
  // ask if you should put another if else statemnet in here to alert "do you wnat to play another round of the game "
  
  } else {

    alert('that is incorrect')
  }
}




 // work on the three guesses, have two functions 