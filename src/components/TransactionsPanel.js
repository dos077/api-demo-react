import React, { useState } from 'react';

const TransactionsPanel = (props) => {
  const [accountId, setAccountId] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const TypeOptions = () => [
    'ALL',
    'TRADE',
    'BUY_ONLY',
    'SELL_ONLY',
    'CASH_IN_OR_CASH_OUT',
    'CHECKING',
    'DIVIDEND',
    'INTEREST',
    'OTHER',
    'ADVISOR_FEES',
  ].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [type, setType] = useState('ALL');
  const [symbol, setSymbol] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [screenStr, setScreenStr] = useState('');

  const getTransaction = async () => {
    const resJson = await props.endPoint.getTransaction({
      accountId,
      transactionId,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  const getTransactions = async () => {
    const resJson = await props.endPoint.getTransactions({
      type,
      symbol,
      accountId,
      endDate: endDate ? new Date(endDate) : undefined,
      startDate: startDate ? new Date(startDate) : undefined,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Transactions</h2>
      <p>
        <label>get transaction</label>
        <label>account ID</label>
        <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <label>transaction ID</label>
        <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
        <button onClick={getTransaction}>get transaction</button>
      </p>
      <p>
        <label>get transactions</label>
        <label>account ID</label>
        <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <label>type</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <TypeOptions />
        </select>
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <label>start date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>end date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button onClick={getTransactions}>get transactions</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default TransactionsPanel;