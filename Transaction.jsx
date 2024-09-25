class Transaction {
    constructor(type, amount) {
      this.type = type;
      this.amount = amount;
      this.timestamp = new Date();
    }
  }
  
  export default Transaction;
  