const readline = require("readline")

let rl = readline.createInterface(
    process.stdin, process.stdout);


//takes the parametes of marks and evaluates it on the given conditions
function calculateGrade(marks){
    if (marks > 79){
        return "A";
    }
    if (marks >= 60 && marks <= 79){
        return "B";
    }

    if (marks >= 49 && marks <= 59){
        return "C";
    }
    if (marks >= 40 && marks <= 49){
        return "D";
    }

    else{
        return "E"
    }

}


function main(){
    
    rl.question('What is your mark\n ', function (score){
        let s = parseInt(score);
        if (isNaN(s)){
            console.log("Enter a number \n")
            main();
            return;
        }
       
       
        let grade = calculateGrade(s);
  
        console.log(`Your grade is ${grade}`)
        rl.close();
        return grade;
       
    });

}

main();