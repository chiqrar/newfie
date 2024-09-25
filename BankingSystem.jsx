
import { useState } from 'react';
import BankAccount from './BankAccount';
import Transaction from './Transaction';
import TransactionHistory from './TransactionHistory';
import AccountDetails from './AccountDetails';

const BankingSystem = () => {
  const [accounts, setAccounts] = useState(new Map());
  const [selectedAccount, setSelectedAccount] = useState(null);

  const createAccount = (accountNumber, accountHolder, balance) => {
    const account = new BankAccount(accountNumber, accountHolder, balance);
    accounts.set(accountNumber, account);
    setAccounts(new Map(accounts));
  };

  const deposit = (accountNumber, amount) => {
    const account = accounts.get(accountNumber);
    account.deposit(amount);
    setAccounts(new Map(accounts));
  };

  const withdraw = (accountNumber, amount) => {
    const account = accounts.get(accountNumber);
    account.withdraw(amount);
    setAccounts(new Map(accounts));
  };

  const transfer = (accountNumber, amount, recipientAccountNumber) => {
    const account = accounts.get(accountNumber);
    const recipientAccount = accounts.get(recipientAccountNumber);
    account.transfer(amount, recipientAccount);
    setAccounts(new Map(accounts));
  };

  const getBalance = (accountNumber) => {
    const account = accounts.get(accountNumber);
    return account.getBalance();
  };

  const calculateInterest = (accountNumber) => {
    const account = accounts.get(accountNumber);
    account.calculateInterest();
    setAccounts(new Map(accounts));
  };

  const lockAccount = (accountNumber) => {
    const account = accounts.get(accountNumber);
    account.lockAccount();
    setAccounts(new Map(accounts));
  };

  const unlockAccount = (accountNumber) => {
    const account = accounts.get(accountNumber);
    account.unlockAccount();
    setAccounts(new Map(accounts));
  };

  const handleAccountSelect = (accountNumber) => {
    setSelectedAccount(accounts.get(accountNumber));
  };

  return (
    <div className="BankingSystem">
      <h1>Banking System</h1>
      <div className="button-container">
        <button onClick={() => createAccount('1234567890', 'John Doe', 1000)}>Create Account</button>
        <button onClick={() => deposit('1234567890', 500)}>Deposit</button>
        <button onClick={() => withdraw('1234567890', 200)}>Withdraw</button>
        <button onClick={() => transfer('1234567890', 300, '9876543210')}>Transfer</button>
        <button onClick={() => calculateInterest('1234567890')}>Calculate Interest</button>
        <button onClick={() => lockAccount('1234567890')}>Lock Account</button>
        <button onClick={() => unlockAccount('1234567890')}>Unlock Account</button>
      </div>
      <div className="account-details">
        <AccountDetails account={selectedAccount} />
      </div>
      <div className="transaction-history">
        <TransactionHistory transactions={selectedAccount?.transactions} />
      </div>
      <div className="select-account">
        <select onChange={(e) => handleAccountSelect(e.target.value)}>
          {[...accounts.keys()].map((accountNumber) => (
            <option value={accountNumber}>{accountNumber}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BankingSystem;


