
import { useState } from "react";

const BankAccount = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [interestRate, setInterestRate] = useState(0.02);
  const [transactionFee, setTransactionFee] = useState(1);
  const [isLocked, setIsLocked] = useState(false);

  const deposit = (amount) => {
    if (isLocked) {
      throw new Error('Account is locked');
    }
    setBalance(balance + amount - transactionFee);
    setTransactions([...transactions, { type: 'deposit', amount }]);
  };

  const withdraw = (amount) => {
    if (isLocked) {
      throw new Error('Account is locked');
    }
    if (balance < amount + transactionFee) {
      throw new Error('Insufficient funds');
    }
    setBalance(balance - amount - transactionFee);
    setTransactions([...transactions, { type: 'withdrawal', amount }]);
  };

  const transfer = (amount, recipientAccount) => {
    if (isLocked) {
      throw new Error('Account is locked');
    }
    if (balance < amount + transactionFee) {
      throw new Error('Insufficient funds');
    }
    setBalance(balance - amount - transactionFee);
    recipientAccount.balance += amount;
    setTransactions([...transactions, { type: 'transfer', amount }]);
    recipientAccount.transactions.push({ type: 'transfer', amount });
  };

  const getBalance = () => {
    return balance;
  };

  const calculateInterest = () => {
    const interest = balance * interestRate;
    setBalance(balance + interest);
    setTransactions([...transactions, { type: 'interest', amount: interest }]);
  };

  const lockAccount = () => {
    setIsLocked(true);
  };

  const unlockAccount = () => {
    setIsLocked(false);
  };

  return {
    accountNumber,
    accountHolder,
    balance,
    transactions,
    deposit,
    withdraw,
    transfer,
    getBalance,
    calculateInterest,
    lockAccount,
    unlockAccount,
  };
};

export default BankAccount;



// Ya phir aap hooks ka use kar sakte hain:



// jsx
// import { useState, useReducer } from "react";

// const initialAccountState = {
//   accountNumber: '',
//   accountHolder: '',
//   balance: 0,
//   transactions: [],
//   interestRate: 0.02,
//   transactionFee: 1,
//   isLocked: false,
// };

// const accountReducer = (state, action) => {
//   switch (action.type) {
//     case 'DEPOSIT':
//       return { ...state, balance: state.balance + action.amount - state.transactionFee };
//     case 'WITHDRAW':
//       return { ...state, balance: state.balance - action.amount - state.transactionFee };
//     case 'TRANSFER':
//       return { ...state, balance: state.balance - action.amount - state.transactionFee };
//     case 'CALCULATE_INTEREST':
//       return { ...state, balance: state.balance + state.balance * state.interestRate };
//     case 'LOCK_ACCOUNT':
//       return { ...state, isLocked: true };
//     case 'UNLOCK_ACCOUNT':
//       return { ...state, isLocked: false };
//     default:
//       return state;
//   }
// };

// const BankAccount = () => {
//   const [accountState, dispatch] = useReducer(accountReducer, initialAccountState);

//   const deposit = (amount) => {
//     dispatch({ type: 'DEPOSIT', amount });
//   };

//   const withdraw = (amount) => {
//     dispatch({ type: 'WITHDRAW', amount });
//   };

//   const transfer = (amount, recipientAccount) => {
//     dispatch({ type: 'TRANSFER', amount });
//   };

//   const getBalance = () => {
//     return accountState.balance;
//   };

//   const calculateInterest = () => {
//     dispatch({ type: 'CALCULATE_INTEREST' });
//   };

//   const lockAccount = () => {
//     dispatch({ type: 'LOCK_ACCOUNT' });
//   };

//   const unlockAccount = () => {
//     dispatch({ type: 'UNLOCK_ACCOUNT' });
//   };

//   return {
//     accountState,
//     deposit,
//     withdraw,
//     transfer,
//     getBalance,
//     calculateInterest,
//     lockAccount,
//     unlockAccount,
//   };
// };

// export default BankAccount;
