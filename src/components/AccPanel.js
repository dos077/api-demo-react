import React, { useState } from 'react';

const AccPanel = (props) => {
  const [screenStr, setScreenStr] = useState('');
  
  const getAccs = async () => {
    const resJson = await props.endPoint.getAccounts();
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Account Info</h2>
      <p>
        <button onClick={getAccs}>get accounts</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default AccPanel;
