import React, { useState } from 'react';

const OrdersPanel = (props) => {  
  const [accountId, setAccountId] = useState('');
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [orderType, setOrderType] = useState('MARKET');
  const [price, setPrice] = useState('');
  const [instruction, setInstruction] = useState('');
  const [orderId, setOrderId] = useState('');
  const [fromEnteredTime, setFromEnteredTime] = useState('');
  const [toEnteredTime, setToEnteredTime] = useState('');
  const [screenStr, setScreenStr] = useState('');

  const placeEquity = async () => {
    await props.endPoint.placeOrderEquity({
      accountId,
      quantity,
      symbol,
      orderType,
      price,
      instruction,
    });
  }

  const cancelOrder = async () => {    
    await props.endPoint.cancelOrder({ accountId, orderId });
  }

  const getOrders = async () => {
    const resJson = await props.endPoint.getOrdersByPath({
      accountId,
      fromEnteredTime: fromEnteredTime
        ? new Date(fromEnteredTime)
        : undefined,
      toEnteredTime: toEnteredTime ? new Date(toEnteredTime) : undefined,
    });
    console.log(resJson);
    setScreenStr(JSON.stringify(resJson));
  }

  return (
    <section>
      <h2>Orders</h2>
      <p>
        <label>Place Equity Order(Placing Actual Order in Your Account!)</label>
        <label>account ID</label>
        <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <label>symbol</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <label>quantity</label>
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <label>order type</label>
        <input type="text" value={orderType} onChange={(e) => setOrderType(e.target.value)} />
        <label>price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="for limit order" />
        <label>instruction</label>
        <input type="text" value={instruction} onChange={(e) => setInstruction(e.target.value)} placeholder="BUY or SELL" />
        <button onClick={placeEquity}>place order</button>
      </p>
      <p>
        <label>Cancel Order</label>
        <label>account ID</label>
        <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <label>order ID</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <button onClick={cancelOrder}>cancel order</button>
      </p>
      <p>
        <label>account ID</label>
        <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <label>from entered date</label>
        <input type="date" value={fromEnteredTime} onChange={(e) => setFromEnteredTime(e.target.value)} />
        <label>to entered date</label>
        <input type="date" value={toEnteredTime} onChange={(e) => setToEnteredTime(e.target.value)} />
        <button onClick={getOrders}>get orders</button>
      </p>
      <p>{screenStr}</p>
    </section>
  )
}

export default OrdersPanel;
