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

    /**
     * add the charge as the transaction to the transactions array
     * payee the name of the payee
     * amt the amount being charged
     * positive amounts are removed from the balance
     * Negative amounts are refunds
     */
  charge(payee, amt){
    //TODO: currently this allows overcharge, 
    // if statement to prevent over charge.
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



let acct1 = new BankAccount("5553429", "Jane Doe");

console.log(acct1.accountNumber); //5553429
console.log(acct1.owner); //Jane Doe
console.log(acct1.balance()); // 0

acct1.deposit(100);
console.log(acct1.balance()); // 100

acct1.deposit(-200); // should no be allowed
console.log(acct1.balance()); // 100

acct1.charge('Target', 30.50);
acct1.charge('FreeBirds', 15.15);
console.log(acct1.balance()); // 54.35

acct1.charge('Diamond Shop', 1000) // Should not be allowed
console.log(acct.balance()); // 54.35

acct.charge('Target', -20) // refund
console.log(acct1.balance()); //74.35
