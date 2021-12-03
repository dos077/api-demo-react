import React, { useState } from 'react';

const OptionChainPanel = (props) => {
  const [symbol, setSymbol] = useState('');
  const ContractOptions = () => ['ALL', 'CALL', 'PUT'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [contractType, setContractType] = useState('ALL');
  const [strikeCount, setStrikeCount] = useState(5);
  const [includeQuotes, setIncludeQuotes] = useState(false);
  const StrategyOptions = () => ['SINGLE',
    'ANALYTICAL',
    'COVERED',
    'VERTICAL',
    'CALENDAR',
    'STRANGLE',
    'STRADDLE',
    'BUTTERFLY',
    'CONDOR',
    'DIAGONAL',
    'COLLAR',
    'ROLL',
  ].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [strategy, setStrategy] = useState('SINGLE');
  const [strikeInterval, setStrikeInterval] = useState('');
  const [strike, setStrike] = useState('');
  const RangeOptions = () => ['ALL', 'ITM', 'NTM', 'OTM', 'SAK', 'SBK', 'SNK'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [range, setRange] = useState('ALL');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [volatility, setVolatility] = useState('');
  const [underlyingPrice, setUnderlyingPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [daysToExpiration, setDaysToExpiration] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const OptionTypeOptions = () => ['S', 'NS', 'ALL'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [optionType, setOptionType] = useState('ALL');
  const [screenStr, setScreenStr] = useState('');

  const getOptionChain = async () => {
    const params = {
      symbol,
      contractType,
      strikeCount,
      includeQuotes,
      strategy,
      interval: strikeInterval,
      strike,
      range,
      fromDate: fromDate ? new Date(fromDate) : null,
      toDate: toDate ? new Date(toDate) : null,
      volatility,
      underlyingPrice,
      interestRate,
      daysToExpiration,
      expMonth,
      optionType,
    };
    const resJson = await props.endPoint.getOptionChain(params);
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Option Chain</h2>
      <p>
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <label>contract type</label>
        <select value={contractType} onChange={e => setContractType(e.target.value)}>
          <ContractOptions />
        </select>
        <label>strike count</label>
        <input type="text" value={strikeCount} onChange={(e) => setStrikeCount(e.target.value)} />
        <label>include quotes</label>
        <input type="checkbox" checked={includeQuotes} onChange={(e) => setIncludeQuotes(e.target.checked)} />
        <label>strategy</label>
        <select value={strategy} onChange={e => setStrategy(e.target.value)}>
          <StrategyOptions />
        </select>
        <label>interval</label>
        <input type="text" value={strikeInterval} onChange={(e) => setStrikeInterval(e.target.value)} />
        <label>strike</label>
        <input type="text" value={strike} onChange={(e) => setStrike(e.target.value)} />
        <label>range</label>
        <select value={range} onChange={e => setRange(e.target.value)}>
          <RangeOptions />
        </select>
        <label>from date</label>
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        <label>to date</label>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        <label>volatility</label>
        <input type="text" value={volatility} onChange={(e) => setVolatility(e.target.value)} />
        <label>underlying price</label>
        <input type="text" value={underlyingPrice} onChange={(e) => setUnderlyingPrice(e.target.value)} />
        <label>interest rate</label>
        <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        <label>days to expiration</label>
        <input type="text" value={daysToExpiration} onChange={(e) => setDaysToExpiration(e.target.value)} />
        <label>expire mont</label>
        <input type="text" value={expMonth} onChange={(e) => setExpMonth(e.target.value)} />
        <label>option type</label>
        <select value={optionType} onChange={e => setOptionType(e.target.value)}>
          <OptionTypeOptions />
        </select>

        <button onClick={getOptionChain}>get chain</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default OptionChainPanel;
