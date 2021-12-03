import React, { useState } from 'react';
import TDAPI from '@i077/tda-api-nodejs-unofficial';

import './App.css';
import ConfigPanel from './components/ConfigPanel';
import AuthPanel from './components/AuthPanel';
import InstrumentsPanel from './components/InstrumentPanel';
import MoversPanel from './components/MoversPanel';
import OptionChainPanel from './components/OptionChainPanel';
import PriceHistoryPanel from './components/PriceHistoryPanel';
import QuotesPanel from './components/QuotesPanel';
import AccPanel from './components/AccPanel';
import OrdersPanel from './components/OrdersPanel';
import TransactionsPanel from './components/TransactionsPanel';

const App = () => {
  const [APIClient, setAPIClient] = useState(undefined);
  const [isLogIn, setIsLogIn] = useState(false);
  const [tabsSelected, setTabsSelected] = useState([]);
  
  const unauthTabOptions = ['instruments', 'movers', 'options', 'priceHistory', 'quotes'];
  const authTabOptions = ['account', 'orders', 'transactions'];

  const TabOptions = () =>
    (isLogIn ? [...unauthTabOptions, ...authTabOptions] : unauthTabOptions)
      .map(option => <option key={option} value={option}>{option}</option>);

  const handleTabOptions = (e) => {
    const newSelection = [];
    const options = e.target;
    for (let i = 0; i < options.length; i++) {
      const { selected, value } = options[i];
      if (selected) newSelection.push(value);
    }
    setTabsSelected(newSelection);
  }

  const buildClient = (config) => {
    setAPIClient(TDAPI({
      ...config,
      afterLogIn: () => { setIsLogIn(true) },
      afterLogOut: () => { setIsLogIn(false) }
    }));
  }

  return (
    <div>
      { !APIClient &&
        <ConfigPanel buildClient={buildClient} />
      }

      { APIClient &&
        <select
          value={tabsSelected}
          onChange={(e)=> {handleTabOptions(e)}}
          multiple={true}
          size="5"
        >
          <TabOptions />
        </select>
      }
      
      { APIClient && <AuthPanel APIClient={APIClient} isLogIn={isLogIn} /> }

      { (APIClient && isLogIn && tabsSelected.includes('account')) &&
        <AccPanel endPoint={APIClient.accounts} /> }
      { (APIClient && isLogIn && tabsSelected.includes('orders')) &&
        <OrdersPanel endPoint={APIClient.orders} /> }
      { (APIClient && isLogIn && tabsSelected.includes('transasctions')) &&
         <TransactionsPanel endPoint={APIClient.transactionHistory} /> }
      
      { (APIClient && tabsSelected.includes('instruments')) &&
        <InstrumentsPanel endPoint={isLogIn ? APIClient.instruments : APIClient.instruments.unauthenticated } /> }
      { (APIClient && tabsSelected.includes('movers')) &&
        <MoversPanel endPoint={isLogIn ? APIClient.movers : APIClient.movers.unauthenticated} /> }
      { (APIClient && tabsSelected.includes('options')) &&
        <OptionChainPanel endPoint={isLogIn ? APIClient.optionChains : APIClient.optionChains.unauthenticated} /> }
      { (APIClient && tabsSelected.includes('priceHistory')) &&
        <PriceHistoryPanel endPoint={isLogIn ? APIClient.priceHistory : APIClient.priceHistory.unauthenticated} /> }
      { (APIClient && tabsSelected.includes('quotes')) &&
        <QuotesPanel endPoint={isLogIn ? APIClient.quotes : APIClient.quotes.unauthenticated} /> }
    </div>
  )
}

export default App;
