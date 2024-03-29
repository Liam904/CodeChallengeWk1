const readline = require("readline")

let rl = readline.createInterface(
    process.stdin, process.stdout);

//takes the speed and evaluates based on the given conditons
function checkSpeed(speed){
    if (speed < 70){
        return "OK";     
    }
        let diff = speed -70
        let points = diff / 5;   
        
        console.log(`points: ${points}`)

        if (points > 12){
            return `License suspended `
        }
    }


 

function main(){
    rl.question('Enter your speed\n', function (speed) {
        let s = parseInt(speed);
        if (isNaN(s)){
            console.log("Please enter a number \n");
            main();
            return;
    
        }

        console.log(checkSpeed(s))
        rl.close();
    
        
    });

    }
    main();
