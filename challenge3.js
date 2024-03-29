const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNHIFDeduction(salary) {
    if (salary <= 5999) {
        return 150;
    }
    if (salary >= 6000 && salary <= 7999) {
        return 300;
    }
    if (salary >= 8000 && salary <= 11999) {
        return 400;
    }
    if (salary >= 12000 && salary <= 14999) {
        return 500;
    }
    if (salary >= 15000 && salary <= 19999) {
        return 600;
    }
    if (salary >= 20000 && salary <= 24999) {
        return 750;
    }
    if (salary >= 25000 && salary <= 29999) {
        return 850;
    }
    if (salary >= 30000 && salary <= 34999) {
        return 900;
    }
    if (salary >= 35000 && salary <= 39999) {
        return 950;
    }
    if (salary >= 40000 && salary <= 44999) {
        return 1000;
    }
    if (salary >= 45000 && salary <= 49999) {
        return 1100;
    }
    if (salary >= 50000 && salary <= 59999) {
        return 1200;
    }
    if (salary >= 60000 && salary <= 69999) {
        return 1300;
    }
    if (salary >= 70000 && salary <= 79999) {
        return 1400;
    }
    if (salary >= 80000 && salary <= 89999) {
        return 1500;
    }
    if (salary >= 90000 && salary <= 99999) {
        return 1600;
    }
    if (salary >= 100000) {
        return 1700;
    }
}

function getPayee(salary) {
    if (salary <= 24000) {
        return 0;
    }
    if (salary > 24000 && salary <= 32333.33) {
        return salary * 0.25;
    }
    if (salary > 32333.33 && salary <= 500000) {
        return salary * 0.3;
    }
    if (salary > 500000 && salary <= 800000) {
        return salary * 0.325;
    }
    if (salary > 800000) {
        return salary * 0.35;
    }
}

function calculateNetSalary(basicSalary,benefits) {
    const grossSalary = basicSalary + benefits;
    const nhifDeduction = getNHIFDeduction(grossSalary);
    const payee = getPayee(grossSalary);
    const netSalary = grossSalary - nhifDeduction - payee;

    return {
        grossSalary,
        nhifDeduction,
        payee,
        netSalary
    };
}

function main() {
    rl.question('Enter your basic salary\n', function (basicSalary) {
        rl.question('Enter your benefits\n', function (benefits) {
            let basic = parseInt(basicSalary);
            let b = parseInt(benefits);
            if (isNaN(basic) || isNaN(b)) {
                console.log("Please enter valid numbers \n");
                main();
                return;
            }

            const result = calculateNetSalary(basic, b);
            console.log("Gross Salary: ", result.grossSalary);
            console.log("NHIF Deduction: ", result.nhifDeduction);
            console.log("Payee (Tax): ", result.payee);
            console.log("Net Salary: ", result.netSalary);

            rl.close();
        });
    });
}

main();
