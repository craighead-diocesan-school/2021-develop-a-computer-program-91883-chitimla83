// Your code goes in this file.

// ask for the user name 

alert ("This is a guess the number game")
//ask for user name
let username = prompt('Whats your name?')
// the variable is equal a radom number generator
let ranNum = Math.floor(Math.random()* 20) + 1;
// tells you the random number
alert (ranNum)


// inform the purpose of the game and then ask the user to guess a number
alert ( "I'm thinking of a number between 1- 20 ")
let number = prompt ('guess a number')
// start a while statement and have two options, if and else
while (number == ranNum ) {
alert ('that is correct!')
} if (number != ranNum) {
    alert ('that is inocrrect')
}


 