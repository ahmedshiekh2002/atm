import inquirer from "inquirer";


    let myBalance: number = 10000; // in dollars
    let myPin: number = 1234;

    let answer: any = await inquirer.prompt(
        {
            name: "pinNumber",
            message: "Enter Your pin = ",
            type: "number"
        }
    );

    if (answer.pinNumber === myPin) {
        console.log("correct pin code");
        let operationAns: any = await inquirer.prompt(
            {
                name: "operation",
                type: "list",
                message: "What operation you want to perform",
                choices: ["withdraw", "check balance"]
            }
        );

        if (operationAns.operation === "withdraw") {
            let amountAns: any = await inquirer.prompt(
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            );

            myBalance -= amountAns.amount;
            if (amountAns.amount < 10000) {
                console.log(`Your remaining balance is ${myBalance}`);
            } else {
                console.log("Please Enter Amount less than 10000");
            }
        } else {
            console.log(`your balance is ${myBalance}`);
        }
    }
    else{
        console.log("incorrect pin")
    }

