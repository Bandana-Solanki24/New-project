import React, { useState } from 'react';
import Denomination from '../Denomination/index';

const CashWithdrawal = () => {
  const [balance, setBalance] = useState(2000);
  const denominationsList = [
    {
      id: 1,
      value: 50,
    },
    {
      id: 2,
      value: 100,
    },
    {
      id: 3,
      value: 200,
    },
    {
      id: 4,
      value: 500,
    },
  ];

  const name = 'Sarah Williams';
  const initial = name.slice(0, 1);

  const updateBalance = value => {
    setBalance(prevBalance => prevBalance - value);
  };

  return (
    <div className="app-container">
      <div className="cash-withdrawal-container">
        <div className="user-details-container">
          <div className="initial-container">
            <p className="initial">{initial}</p>
          </div>
          <p className="name">{name}</p>
        </div>
        <div className="balance-container">
          <p className="your-balance">Your Balance</p>
          <p className="balance">
            {balance}
            <br />
            <span className="currency">In Rupees</span>
          </p>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations-list">
          {denominationsList.map(eachDenomination => (
            <Denomination
              key={eachDenomination.id}
              denominationDetails={eachDenomination}
              updateBalance={updateBalance}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CashWithdrawal;
