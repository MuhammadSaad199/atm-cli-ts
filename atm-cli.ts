import inquirer from "inquirer";
import { ListGroupItemProps } from "react-bootstrap";

interface ansType{
    userID : string,
    userPin : number,
    withdrawmethod : number,
    transactionType :string,
    amount : number
}

const answers : ansType =await inquirer.prompt([
{
    type : "input",
    name: "userID",
    message : "Kindly enter your id"
},
{
    type : "number",
    name: "userPin",
    message : "Kindly enter your Pin"
},
{
    type : "list",
    name: "accountType",
    choices : ["current" , "saving"],
    message : "Select your Account"
},
{
    type : "list",
    name: "transactionType",
    choices : ["fast cash" , "withdraw"],
    message : "Select your Account",
    When(answers: { accountType: any; }){
        return answers.accountType
    },
},
{
    type : "list",
    name: "amount",
    choices : ["1000","2000","3000","4000"],
    message : "fast cash list",
    when(answers){
        return answers.transactionType=="fast cash"
    },
},
{
    type : "number",
    name: "amount",
    message : "enter your withdraw amount",
    when(answers){
        return answers.transactionType == "withdraw"
    },
}
])



if(answers.userID && answers.userPin){
const balance = Math.floor(Math.random()*100000000)
console.log("balance",balance)
const enteramount = answers.amount

if (balance >= enteramount){
    const Remainingamount = balance - enteramount;
    console.log("your ramaining amount is" ,Remainingamount)
}else{
    console.log("your balance is insufficient")
}
}

