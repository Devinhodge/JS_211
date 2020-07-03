'use strict'

class BankAccount {
  accountNumber; //string
  owner; // string
  transactions; // array of transactions

  //constructor should take in accountnumber and owner
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }


  //This method should take in an amount, and add a new Transaction as a deposit to this bank account
  deposit(amt){
    if(amt > 0) { //only allow deposits that are greater than zero
      let newTransaction = new Transaction(amt, "Deposit");
      this.transactions.push(newTransaction);
    }
  }

  balance(){
      let sum = 0;
      for(let i = 0; i < this.transactions.length; i++){
        let currentTransactions = this.transactions[i];
        sum = sum + currentTransactions.amount;
      }
      return sum;
    }
  charge(payee, amt){
    // add code
    // if statement for over charges
    if(amt < this.balance()) {
      let newCharge = new this.transactions(-amt, payee);
      this.transactions.push(newCharge);
    }
  }
  
}
  

class Transaction {
  amount; //amount on the transaction
  payee; //description of the charge on the transactions
  date; // the date of the transaction

    constructor(amount, payee){
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();

  }
}



let b1 = new BankAccount("xxx012", "Jane Doe");
b1.deposit(300);
b1.deposit(15);
b1.deposit(35);
b1.deposit(-50);
let b2 = new BankAccount("yyy3330", "James Smith");

console.log(b1.owner, "--> Jane Doe");
console.log(b2.owner, "-->James Smith");

console.log(b1.accountNumber);
console.log(b2.accountNumber);

let t1 = new Transaction(45, "Targe");
let t2 = new Transaction(500, "Deposit");4

console.log(t1.payee)
console.log(t2.amount)
