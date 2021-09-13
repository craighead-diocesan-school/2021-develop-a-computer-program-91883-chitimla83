// Your code goes in this file.

// alert the name of the game  
alert("This is a guess the number game")
//ask for user name
let username = prompt('Whats your name?')
// allow the user input be equvilant to the numbers they have to guess
let userNumber= 20
// the variable is equal a radom number generator

// generate a random number
let ranNum = Math.floor(Math.random() * 20) + 1;
// tells you the random number (remove later)
alert(ranNum)

// ask the user to guess a number
alert("I'm thinking of a number between 1- 20 ")
// start a while statement and have two options, if and else



while (userNumber == ranNum) {
  let userNumber = prompt('guess a number')
  if (userNumber == ranNum) {
    alert('that is correct!')
  } else {
    alert('that is incorrect')

  }
}






 // work on the three guesses, have two functions 