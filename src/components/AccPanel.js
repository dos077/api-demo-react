import React, { useState } from 'react';

const AccPanel = (props) => {
  const [screenStr, setScreenStr] = useState('');
  const [fields, setFields] = useState([]);
  
  const FieldsOptions = () =>
    ['positions', 'orders']
      .map(option => <option key={option} value={option}>{option}</option>);

  const handleOptions = (e) => {
    const newSelection = [];
    const options = e.target;
    for (let i = 0; i < options.length; i++) {
      const { selected, value } = options[i];
      if (selected) newSelection.push(value);
    }
    setFields(newSelection);
  }
  
  const getAccs = async () => {
    const resJson = await props.endPoint.getAccounts({ fields });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Account Info</h2>
      <p>
        <label>fields</label>
        <select
          value={fields} 
          onChange={(e)=> {handleOptions(e)}}
          multiple={true}
          size="2"
        >
          <FieldsOptions />
        </select>
        <button onClick={getAccs}>get accounts</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default AccPanel;
