import React, { useState } from 'react';

const PriceHistoryPanel = (props) => {
  const [symbol, setSymbol] = useState('');
  const PeriodTypeOptions = () => ['day', 'month', 'year', 'ytd'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [periodType, setPeriodType] = useState('day');
  const [period, setPeriod] = useState(1);
  const FrequencyTypeOptions = () => ['minute', 'daily', 'weekly', 'monthly'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const [frequencyType, setFrequencyType] = useState('minute');
  const [frequency, setFrequency] = useState(1);
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [needExtendedHoursData, setNeedExtendedHoursData] = useState(false);
  const [screenStr, setScreenStr] = useState('');

  const getHistory = async () => {
    const resJson = await props.endPoint.getPriceHistory({
      symbol,
      periodType,
      period,
      frequencyType,
      frequency,
      endDate: endDate ? new Date(endDate) : null,
      startDate: startDate ? new Date(startDate) : null,
      needExtendedHoursData,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  };

  return (
    <section>
      <h2>Price History</h2>
      <p>
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <label>period type</label>
        <select value={periodType} onChange={e => setPeriodType(e.target.value)}>
          <PeriodTypeOptions />
        </select>
        <label>period</label>
        <input type="text" value={period} onChange={(e) => setPeriod(e.target.value)} />
        <label>frequency type</label>
        <select value={frequencyType} onChange={e => setFrequencyType(e.target.value)}>
          <FrequencyTypeOptions />
        </select>
        <label>frequency</label>
        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
        <label>start date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>end date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <label>Extended Hour Data</label>
        <input type="checkbox" checked={needExtendedHoursData} onChange={(e) => setNeedExtendedHoursData(e.target.checked)} />
        <button onClick={getHistory}>get history</button>
      </p>
      <p>{screenStr}</p>
    </section>
  );
}

export default PriceHistoryPanel;
