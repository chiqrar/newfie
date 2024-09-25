import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
