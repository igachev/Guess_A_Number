let readline = require('readline')
let rl = readline.createInterface(process.stdin,process.stdout)
let randomNumber = generateRandomNumber();
let countAttempts = 0;

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
            countAttempts++;
            console.log("\x1b[32m",'You guess it!',"\x1b[37m");
        console.log(`Number of attempts until succeed: ${countAttempts}`);
            countAttempts = 0;
        askForRestart()
        }
        else if(answer < randomNumber) {
            countAttempts++;
            if(countAttempts === 10) {
                gameOver()
            }
            else {
            console.log("\x1b[33m",'Too Low!',"\x1b[37m");
            askForNumber()
            }    
        }

        else if(answer > randomNumber) {
            countAttempts++;
            if(countAttempts === 10) {
                gameOver()
            }
            else {
            console.log("\x1b[31m",'Too High!',"\x1b[37m");
            askForNumber()
            }  
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
        countAttempts = 0;
        askForNumber()
        randomNumber = generateRandomNumber();
    }
    else if(yesOrNo == 'n') {
        countAttempts = 0;
        console.log('Game ended');
        return rl.close()
    }
   }

   else {
    console.log('Invalid command! Choose y or n');
    askForRestart()
   }
}

function gameOver() {
        console.log('Game Over! Too many attempts!');
        countAttempts = 0;
        askForRestart()
}
