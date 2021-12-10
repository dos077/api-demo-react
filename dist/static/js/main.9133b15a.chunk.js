(this["webpackJsonpapi-demo-react"]=this["webpackJsonpapi-demo-react"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(7),u=n.n(a),i=(n(13),n(5)),s=n(4),j=n(8),o=(n(15),n(0)),l=function(e){var t=Object(c.useState)("@AMER.OAUTHAP"),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)("https://dos077.github.io/api-demo-react/"),i=Object(s.a)(u,2),j=i[0],l=i[1],b=Object(c.useState)(!0),O=Object(s.a)(b,2),d=O[0],h=O[1],x=Object(c.useState)(!0),p=Object(s.a)(x,2),f=p[0],v=p[1],g=Object(c.useState)([]),y=Object(s.a)(g,2),S=y[0],C=y[1],m=function(){return["PlaceTrades","AccountAccess","MoveMoney"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Setup API Client"}),Object(o.jsx)("label",{children:"API Key:"}),Object(o.jsx)("input",{type:"text",value:r,placeholder:"apiky@AMER.OAUTHAP",onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"Redirect URI:"}),Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("label",{children:"Local Store Token"}),Object(o.jsx)("input",{type:"checkbox",checked:d,onChange:function(e){return h(e.target.checked)}}),Object(o.jsx)("label",{children:"Redirect for Login"}),Object(o.jsx)("input",{type:"checkbox",checked:f,onChange:function(e){return v(e.target.checked)}}),Object(o.jsx)("label",{children:"scope"}),Object(o.jsx)("select",{value:S,onChange:function(e){!function(e){for(var t=[],n=e.target,c=0;c<n.length;c++){var r=n[c],a=r.selected,u=r.value;a&&t.push(u)}C(t)}(e)},multiple:!0,size:"3",children:Object(o.jsx)(m,{})}),Object(o.jsx)("button",{onClick:function(){e.buildClient({clientId:r,redirectUri:j,storeAuth:d,logInRedirect:f,scope:S})},value:"initialize client",children:"initialize client"})]})},b=function(e){var t=function(){var t=new URLSearchParams(window.location.search),n=t?t.get("code"):null;e.APIClient.authentication.logIn(n),window.history.pushState({},document.title,window.location.pathname)};return window.location.search&&new URLSearchParams(window.location.search).get("code")&&t(),Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Option Chain"}),!e.isLogIn&&Object(o.jsx)("p",{children:"If logInRedirect is set to true, click login to be redirected to TD Ameritrade OAuth portal."}),!e.isLogIn&&Object(o.jsx)("button",{onClick:t,children:"login"}),e.isLogIn&&Object(o.jsx)("button",{onClick:function(){e.APIClient.authentication.logOut()},children:"logout"})]})},O=n(1),d=n.n(O),h=n(2),x=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)("fundamental"),i=Object(s.a)(u,2),j=i[0],l=i[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),x=O[0],p=O[1],f=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.searchInstruments({symbol:r,projection:j});case 2:n=t.sent,console.log(n),p(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Instruments"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"Search Instruments"}),Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"projection"}),Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("button",{onClick:f,children:"search"})]}),Object(o.jsx)("p",{children:x})]})},p=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)("up"),i=Object(s.a)(u,2),j=i[0],l=i[1],b=Object(c.useState)("value"),O=Object(s.a)(b,2),x=O[0],p=O[1],f=Object(c.useState)(""),v=Object(s.a)(f,2),g=v[0],y=v[1],S=function(){return["up","down"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},C=function(){return["value","percent"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},m=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getMovers({index:r,direction:j,change:x});case 2:n=t.sent,console.log(n),y(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Movers"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"Show Movers"}),Object(o.jsx)("label",{children:"index"}),Object(o.jsx)("input",{type:"text",value:r,placeholder:"ie. $COMPX, $DJI",onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"direction"}),Object(o.jsx)("select",{value:j,onChange:function(e){return l(e.target.value)},children:Object(o.jsx)(S,{})}),Object(o.jsx)("label",{children:"change"}),Object(o.jsx)("select",{"v-value":x,onChange:function(e){return p(e.target.value)},children:Object(o.jsx)(C,{})}),Object(o.jsx)("button",{onClick:m,children:"get movers"})]}),Object(o.jsx)("p",{children:g})]})},f=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=function(){return["ALL","CALL","PUT"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},i=Object(c.useState)("ALL"),j=Object(s.a)(i,2),l=j[0],b=j[1],O=Object(c.useState)(5),x=Object(s.a)(O,2),p=x[0],f=x[1],v=Object(c.useState)(!1),g=Object(s.a)(v,2),y=g[0],S=g[1],C=function(){return["SINGLE","ANALYTICAL","COVERED","VERTICAL","CALENDAR","STRANGLE","STRADDLE","BUTTERFLY","CONDOR","DIAGONAL","COLLAR","ROLL"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},m=Object(c.useState)("SINGLE"),k=Object(s.a)(m,2),w=k[0],I=k[1],L=Object(c.useState)(""),A=Object(s.a)(L,2),P=A[0],D=A[1],T=Object(c.useState)(""),E=Object(s.a)(T,2),N=E[0],R=E[1],q=function(){return["ALL","ITM","NTM","OTM","SAK","SBK","SNK"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},H=Object(c.useState)("ALL"),M=Object(s.a)(H,2),J=M[0],U=M[1],Y=Object(c.useState)(""),_=Object(s.a)(Y,2),B=_[0],K=_[1],z=Object(c.useState)(""),G=Object(s.a)(z,2),Q=G[0],V=G[1],F=Object(c.useState)(""),$=Object(s.a)(F,2),X=$[0],W=$[1],Z=Object(c.useState)(""),ee=Object(s.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(""),re=Object(s.a)(ce,2),ae=re[0],ue=re[1],ie=Object(c.useState)(""),se=Object(s.a)(ie,2),je=se[0],oe=se[1],le=Object(c.useState)(""),be=Object(s.a)(le,2),Oe=be[0],de=be[1],he=function(){return["S","NS","ALL"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},xe=Object(c.useState)("ALL"),pe=Object(s.a)(xe,2),fe=pe[0],ve=pe[1],ge=Object(c.useState)(""),ye=Object(s.a)(ge,2),Se=ye[0],Ce=ye[1],me=function(){var t=Object(h.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={symbol:r,contractType:l,strikeCount:p,includeQuotes:y,strategy:w,interval:P,strike:N,range:J,fromDate:B?new Date(B):null,toDate:Q?new Date(Q):null,volatility:X,underlyingPrice:te,interestRate:ae,daysToExpiration:je,expMonth:Oe,optionType:fe},t.next=3,e.endPoint.getOptionChain(n);case 3:c=t.sent,console.log(c),Ce(JSON.stringify(c));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Option Chain"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"contract type"}),Object(o.jsx)("select",{value:l,onChange:function(e){return b(e.target.value)},children:Object(o.jsx)(u,{})}),Object(o.jsx)("label",{children:"strike count"}),Object(o.jsx)("input",{type:"text",value:p,onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("label",{children:"include quotes"}),Object(o.jsx)("input",{type:"checkbox",checked:y,onChange:function(e){return S(e.target.checked)}}),Object(o.jsx)("label",{children:"strategy"}),Object(o.jsx)("select",{value:w,onChange:function(e){return I(e.target.value)},children:Object(o.jsx)(C,{})}),Object(o.jsx)("label",{children:"interval"}),Object(o.jsx)("input",{type:"text",value:P,onChange:function(e){return D(e.target.value)}}),Object(o.jsx)("label",{children:"strike"}),Object(o.jsx)("input",{type:"text",value:N,onChange:function(e){return R(e.target.value)}}),Object(o.jsx)("label",{children:"range"}),Object(o.jsx)("select",{value:J,onChange:function(e){return U(e.target.value)},children:Object(o.jsx)(q,{})}),Object(o.jsx)("label",{children:"from date"}),Object(o.jsx)("input",{type:"date",value:B,onChange:function(e){return K(e.target.value)}}),Object(o.jsx)("label",{children:"to date"}),Object(o.jsx)("input",{type:"date",value:Q,onChange:function(e){return V(e.target.value)}}),Object(o.jsx)("label",{children:"volatility"}),Object(o.jsx)("input",{type:"text",value:X,onChange:function(e){return W(e.target.value)}}),Object(o.jsx)("label",{children:"underlying price"}),Object(o.jsx)("input",{type:"text",value:te,onChange:function(e){return ne(e.target.value)}}),Object(o.jsx)("label",{children:"interest rate"}),Object(o.jsx)("input",{type:"text",value:ae,onChange:function(e){return ue(e.target.value)}}),Object(o.jsx)("label",{children:"days to expiration"}),Object(o.jsx)("input",{type:"text",value:je,onChange:function(e){return oe(e.target.value)}}),Object(o.jsx)("label",{children:"expire mont"}),Object(o.jsx)("input",{type:"text",value:Oe,onChange:function(e){return de(e.target.value)}}),Object(o.jsx)("label",{children:"option type"}),Object(o.jsx)("select",{value:fe,onChange:function(e){return ve(e.target.value)},children:Object(o.jsx)(he,{})}),Object(o.jsx)("button",{onClick:me,children:"get chain"})]}),Object(o.jsx)("p",{children:Se})]})},v=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=function(){return["day","month","year","ytd"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},i=Object(c.useState)("day"),j=Object(s.a)(i,2),l=j[0],b=j[1],O=Object(c.useState)(1),x=Object(s.a)(O,2),p=x[0],f=x[1],v=function(){return["minute","daily","weekly","monthly"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},g=Object(c.useState)("minute"),y=Object(s.a)(g,2),S=y[0],C=y[1],m=Object(c.useState)(1),k=Object(s.a)(m,2),w=k[0],I=k[1],L=Object(c.useState)(""),A=Object(s.a)(L,2),P=A[0],D=A[1],T=Object(c.useState)(""),E=Object(s.a)(T,2),N=E[0],R=E[1],q=Object(c.useState)(!1),H=Object(s.a)(q,2),M=H[0],J=H[1],U=Object(c.useState)(""),Y=Object(s.a)(U,2),_=Y[0],B=Y[1],K=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getPriceHistory({symbol:r,periodType:l,period:p,frequencyType:S,frequency:w,endDate:P?new Date(P):null,startDate:N?new Date(N):null,needExtendedHoursData:M});case 2:n=t.sent,console.log(n),B(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Price History"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"period type"}),Object(o.jsx)("select",{value:l,onChange:function(e){return b(e.target.value)},children:Object(o.jsx)(u,{})}),Object(o.jsx)("label",{children:"period"}),Object(o.jsx)("input",{type:"text",value:p,onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("label",{children:"frequency type"}),Object(o.jsx)("select",{value:S,onChange:function(e){return C(e.target.value)},children:Object(o.jsx)(v,{})}),Object(o.jsx)("label",{children:"frequency"}),Object(o.jsx)("input",{type:"text",value:w,onChange:function(e){return I(e.target.value)}}),Object(o.jsx)("label",{children:"start date"}),Object(o.jsx)("input",{type:"date",value:N,onChange:function(e){return R(e.target.value)}}),Object(o.jsx)("label",{children:"end date"}),Object(o.jsx)("input",{type:"date",value:P,onChange:function(e){return D(e.target.value)}}),Object(o.jsx)("label",{children:"Extended Hour Data"}),Object(o.jsx)("input",{type:"checkbox",checked:M,onChange:function(e){return J(e.target.checked)}}),Object(o.jsx)("button",{onClick:K,children:"get history"})]}),Object(o.jsx)("p",{children:_})]})},g=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)(""),i=Object(s.a)(u,2),j=i[0],l=i[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),x=O[0],p=O[1],f=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getQuote({symbol:r});case 2:n=t.sent,console.log(n),p(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getQuotes({symbols:j.split(" ")});case 2:n=t.sent,console.log(n),p(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Quotes"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("button",{onClick:f,children:"get quote"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"symbols"}),Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)},placeholder:"separated by space"}),Object(o.jsx)("button",{onClick:v,children:"get quotes"})]}),Object(o.jsx)("p",{children:x})]})},y=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)([]),i=Object(s.a)(u,2),j=i[0],l=i[1],b=function(){return["positions","orders"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},O=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getAccounts({fields:j});case 2:n=t.sent,console.log(n),a(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Account Info"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"fields"}),Object(o.jsx)("select",{value:j,onChange:function(e){!function(e){for(var t=[],n=e.target,c=0;c<n.length;c++){var r=n[c],a=r.selected,u=r.value;a&&t.push(u)}l(t)}(e)},multiple:!0,size:"2",children:Object(o.jsx)(b,{})}),Object(o.jsx)("button",{onClick:O,children:"get accounts"})]}),Object(o.jsx)("p",{children:r})]})},S=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)(""),i=Object(s.a)(u,2),j=i[0],l=i[1],b=Object(c.useState)(0),O=Object(s.a)(b,2),x=O[0],p=O[1],f=Object(c.useState)("MARKET"),v=Object(s.a)(f,2),g=v[0],y=v[1],S=Object(c.useState)(""),C=Object(s.a)(S,2),m=C[0],k=C[1],w=Object(c.useState)(""),I=Object(s.a)(w,2),L=I[0],A=I[1],P=Object(c.useState)(""),D=Object(s.a)(P,2),T=D[0],E=D[1],N=Object(c.useState)(""),R=Object(s.a)(N,2),q=R[0],H=R[1],M=Object(c.useState)(""),J=Object(s.a)(M,2),U=J[0],Y=J[1],_=Object(c.useState)(""),B=Object(s.a)(_,2),K=B[0],z=B[1],G=function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.placeOrderEquity({accountId:r,quantity:x,symbol:j,orderType:g,price:m,instruction:L});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.cancelOrder({accountId:r,orderId:T});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getOrdersByPath({accountId:r,fromEnteredTime:q?new Date(q):void 0,toEnteredTime:U?new Date(U):void 0});case 2:n=t.sent,console.log(n),z(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Orders"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"Place Equity Order(Placing Actual Order in Your Account!)"}),Object(o.jsx)("label",{children:"account ID"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("label",{children:"quantity"}),Object(o.jsx)("input",{type:"text",value:x,onChange:function(e){return p(e.target.value)}}),Object(o.jsx)("label",{children:"order type"}),Object(o.jsx)("input",{type:"text",value:g,onChange:function(e){return y(e.target.value)}}),Object(o.jsx)("label",{children:"price"}),Object(o.jsx)("input",{type:"text",value:m,onChange:function(e){return k(e.target.value)},placeholder:"for limit order"}),Object(o.jsx)("label",{children:"instruction"}),Object(o.jsx)("input",{type:"text",value:L,onChange:function(e){return A(e.target.value)},placeholder:"BUY or SELL"}),Object(o.jsx)("button",{onClick:G,children:"place order"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"Cancel Order"}),Object(o.jsx)("label",{children:"account ID"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"order ID"}),Object(o.jsx)("input",{type:"text",value:T,onChange:function(e){return E(e.target.value)}}),Object(o.jsx)("button",{onClick:Q,children:"cancel order"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"account ID"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"from entered date"}),Object(o.jsx)("input",{type:"date",value:q,onChange:function(e){return H(e.target.value)}}),Object(o.jsx)("label",{children:"to entered date"}),Object(o.jsx)("input",{type:"date",value:U,onChange:function(e){return Y(e.target.value)}}),Object(o.jsx)("button",{onClick:V,children:"get orders"})]}),Object(o.jsx)("p",{children:K})]})},C=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)(""),i=Object(s.a)(u,2),j=i[0],l=i[1],b=function(){return["ALL","TRADE","BUY_ONLY","SELL_ONLY","CASH_IN_OR_CASH_OUT","CHECKING","DIVIDEND","INTEREST","OTHER","ADVISOR_FEES"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))},O=Object(c.useState)("ALL"),x=Object(s.a)(O,2),p=x[0],f=x[1],v=Object(c.useState)(""),g=Object(s.a)(v,2),y=g[0],S=g[1],C=Object(c.useState)(""),m=Object(s.a)(C,2),k=m[0],w=m[1],I=Object(c.useState)(""),L=Object(s.a)(I,2),A=L[0],P=L[1],D=Object(c.useState)(""),T=Object(s.a)(D,2),E=T[0],N=T[1],R=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getTransaction({accountId:r,transactionId:j});case 2:n=t.sent,console.log(n),N(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.endPoint.getTransactions({type:p,symbol:y,accountId:r,endDate:A?new Date(A):void 0,startDate:k?new Date(k):void 0});case 2:n=t.sent,console.log(n),N(JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Transactions"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"get transaction"}),Object(o.jsx)("label",{children:"account ID"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"transaction ID"}),Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("button",{onClick:R,children:"get transaction"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{children:"get transactions"}),Object(o.jsx)("label",{children:"account ID"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"type"}),Object(o.jsx)("select",{value:p,onChange:function(e){return f(e.target.value)},children:Object(o.jsx)(b,{})}),Object(o.jsx)("label",{children:"symbol"}),Object(o.jsx)("input",{type:"text",value:y,onChange:function(e){return S(e.target.value)}}),Object(o.jsx)("label",{children:"start date"}),Object(o.jsx)("input",{type:"date",value:k,onChange:function(e){return w(e.target.value)}}),Object(o.jsx)("label",{children:"end date"}),Object(o.jsx)("input",{type:"date",value:A,onChange:function(e){return P(e.target.value)}}),Object(o.jsx)("button",{onClick:q,children:"get transactions"})]}),Object(o.jsx)("p",{children:E})]})},m=function(){var e=Object(c.useState)(void 0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),u=Object(s.a)(a,2),O=u[0],d=u[1],h=Object(c.useState)([]),m=Object(s.a)(h,2),k=m[0],w=m[1],I=["instruments","movers","options","priceHistory","quotes"],L=["account","orders","transactions"],A=function(){return(O?[].concat(I,L):I).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))};return Object(o.jsxs)("div",{children:[!n&&Object(o.jsx)(l,{buildClient:function(e){r(Object(j.a)(Object(i.a)(Object(i.a)({},e),{},{afterLogIn:function(){d(!0)},afterLogOut:function(){d(!1)}})))}}),n&&Object(o.jsx)("select",{value:k,onChange:function(e){!function(e){for(var t=[],n=e.target,c=0;c<n.length;c++){var r=n[c],a=r.selected,u=r.value;a&&t.push(u)}w(t)}(e)},multiple:!0,size:"5",children:Object(o.jsx)(A,{})}),n&&Object(o.jsx)(b,{APIClient:n,isLogIn:O}),n&&O&&k.includes("account")&&Object(o.jsx)(y,{endPoint:n.accounts}),n&&O&&k.includes("orders")&&Object(o.jsx)(S,{endPoint:n.orders}),n&&O&&k.includes("transactions")&&Object(o.jsx)(C,{endPoint:n.transactionHistory}),n&&k.includes("instruments")&&Object(o.jsx)(x,{endPoint:O?n.instruments:n.instruments.unauthenticated}),n&&k.includes("movers")&&Object(o.jsx)(p,{endPoint:O?n.movers:n.movers.unauthenticated}),n&&k.includes("options")&&Object(o.jsx)(f,{endPoint:O?n.optionChains:n.optionChains.unauthenticated}),n&&k.includes("priceHistory")&&Object(o.jsx)(v,{endPoint:O?n.priceHistory:n.priceHistory.unauthenticated}),n&&k.includes("quotes")&&Object(o.jsx)(g,{endPoint:O?n.quotes:n.quotes.unauthenticated})]})};u.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9133b15a.chunk.js.map