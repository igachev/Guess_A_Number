let readline = require('readline')
let rl = readline.createInterface(process.stdin,process.stdout)
let randomNumber = generateRandomNumber();

let askForNumber = function() { 
    rl.question('Guess the number (0-100): ', function(answer) {
    checkAnswer(answer)
})
}

let askForRestart = function() {
rl.question('Do you want to continue playing? y/n: ',function(yesOrNo) {
 checkForRestart(yesOrNo)
})
}

askForNumber()

function checkAnswer(answer) {
    
    if(answer >= 0 && answer <= 100) {
        if(answer == randomNumber) {
            console.log('You guess it!');
            //return rl.close()
        askForRestart()
        }
        else if(answer < randomNumber) {
            console.log('Too Low!');
            askForNumber()
        }
        else if(answer > randomNumber) {
            console.log('Too High!');
            askForNumber()
        }
    }

    else {
    console.log('Invalid input!Number must be less than 101 and equal or greater than 0.');
    askForNumber()
    }
}

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
}

function checkForRestart(yesOrNo) {
   if(yesOrNo == 'y' || yesOrNo == 'n') {
    if(yesOrNo == 'y') {
        askForNumber()
        randomNumber = generateRandomNumber();
    }
    else if(yesOrNo == 'n') {
        console.log('Game ended');
        return rl.close()
    }
   }

   else {
    console.log('Invalid command! Choose y or n');
    askForRestart()
   }
}