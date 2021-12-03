import React, { useState } from 'react';

const QuotesPanel = (props) => {  
  const [symbol, setSymbol] = useState('');
  const [symbols, setSymbols] = useState('');
  const [screenStr, setScreenStr] = useState('');

  const getQuote = async () => {
    const resJson = await props.endPoint.getQuote({ symbol });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  const getQuotes = async () => {
    const resJson = await props.endPoint.getQuotes({ symbols: symbols.split(' ') });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Quotes</h2>
      <p>
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <button onClick={getQuote}>get quote</button>
      </p>
      <p>
        <label>symbols</label>
        <input type="text" value={symbols} onChange={(e) => setSymbols(e.target.value)} placeholder="separated by space" />
        <button onClick={getQuotes}>get quotes</button>
      </p>
      <p>{screenStr}</p>
    </section>
  );
};

export default QuotesPanel;
