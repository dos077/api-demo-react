import React, { useState } from 'react';

const MoversPanel = (props) => {
  const [index, setindex] = useState('');
  const [direction, setDirection] = useState('up');
  const [change, setChange] = useState('value');
  const [screenStr, setScreenStr] = useState('');

  const DirectionOptions = () => ['up', 'down'].map(option => 
    <option key={option} value={option}>{option}</option>
  );
  const ChangeOptions = () => ['value', 'percent'].map(option => 
    <option key={option} value={option}>{option}</option>
  );

  const getMovers = async () => {
    const resJson = await props.endPoint.getMovers({
      index,
      direction,
      change,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Movers</h2>
      <p>
        <label>Show Movers</label>
        <label>index</label>
        <input type="text" value={index} placeholder="ie. $COMPX, $DJI" onChange={e => setindex(e.target.value)} />
        <label>direction</label>
        <select value={direction} onChange={e => setDirection(e.target.value)}>
          <DirectionOptions />
        </select>
        <label>change</label>
        <select v-value={change} onChange={e => setChange(e.target.value)}>
          <ChangeOptions />
        </select>
        <button onClick={getMovers}>get movers</button>
      </p>
      <p>{screenStr}</p>
    </section>
  );
}

export default MoversPanel;
