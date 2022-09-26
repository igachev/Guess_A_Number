let readline = require('readline')
let rl = readline.createInterface(process.stdin,process.stdout)
let randomNumber = generateRandomNumber();

let askForNumber = function() { 
    rl.question('Guess the number (0-100): ', function(answer) {
    checkAnswer(answer)
})
}

askForNumber()

function checkAnswer(answer) {
    
    if(answer >= 0 && answer <= 100) {
        if(answer == randomNumber) {
            console.log('You guess it!');
            return rl.close()
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