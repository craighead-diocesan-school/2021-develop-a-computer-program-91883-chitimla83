
// defines the constants of the game 
const maxNum = 20
const minNum = 1
const maxTries = 3

function getName() {

  // alerts the name of the game  
  alert("This is a guess the number game")
  //asks for user name
  let userName = prompt('Whats your name?')
  alert('Hi ' + userName)
}

//gets the username & runs the game &  gets user input & runs the game if the user input is equivilent to yes 
function play() {
  getName()

  let userInput = 'yes'

  while (userInput == 'yes') {
    playgame()
    userInput = prompt('Do you want play again')
  }
}


// generates random number and plays game
function playgame() {
  // generates a random number
  let ranNum = Math.floor(Math.random() * maxNum) + minNum;

  // alerts the min and max 
  alert("I'm thinking of a number between " + minNum + ' and ' + maxNum)

  //define the variable
  let guess = 0


  // runs game 
  while (guess != maxTries) {
    // add one to the their the guesses so that the loop stops at 3
    guess += 1
    //ask user for their guess 
    let userNumber = prompt('guess a number')
    //convert user input to a number
    userNumber = Number(userNumber)

    //checks the answer 
    if (userNumber >= minNum && userNumber <= maxNum) {

      if (userNumber == ranNum) {
        guess = maxTries
        alert('that is correct')

      } else {
        alert('that is incorrect')
      }

    } else {
      alert('error:inavild')
    }

  }
}
