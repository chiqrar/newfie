import React from 'react';

const AccountDetails = ({ account }) => {
  return (
    <div>
      <h2>Account Details</h2>
      <p>Account Number: {account.accountNumber}</p>
      <p>Account Holder: {account.accountHolder}</p>
      <p>Balance: {account.balance}</p>
    </div>
  );
};

export default AccountDetails;
