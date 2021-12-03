import React, { useState } from 'react';

const InstrumentsPanel = (props) => {
  // const [cusip, setCusip] = useState();
  const [symbol, setSymbol] = useState('');
  const [projection, setProjection] = useState('fundamental');
  const [screenStr, setScreenStr] = useState('');

  const searchInstruments = async () => {
    const resJson = await props.endPoint.searchInstruments({
      symbol,
      projection,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Instruments</h2>
      <p>
        <label>Search Instruments</label>
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <label>projection</label>
        <input type="text" value={projection} onChange={(e) => setProjection(e.target.value)} />
        <button onClick={searchInstruments}>search</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default InstrumentsPanel;
