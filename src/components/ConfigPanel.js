import React, { useState } from 'react';

const ConfigPanel = (props) => {
  const [clientId, setClientId] = useState('@AMER.OAUTHAP');
  const [redirectUri, setRedirectUri] = useState('https://dos077.github.io/api-demo-react/');
  const [storeAuth, setStoreAuth] = useState(true);
  const [logInRedirect, setLogInRedirect] = useState(true);

  const buildClient = () => {
    props.buildClient({
      clientId, redirectUri, storeAuth, logInRedirect
    });
  }

  return (
    <section>
      <h2>Setup API Client</h2>
      <label>API Key:</label>
      <input type="text" value={clientId} placeholder="apiky@AMER.OAUTHAP" onChange={(e) => setClientId(e.target.value)} />
      <label>Redirect URI:</label>
      <input type="text" value={redirectUri} onChange={(e) => setRedirectUri(e.target.value)} />
      <label>Local Store Token</label>
      <input type="checkbox" checked={storeAuth} onChange={(e) => setStoreAuth(e.target.checked)} />
      <label>Redirect for Login</label>
      <input type="checkbox" checked={logInRedirect} onChange={(e) => setLogInRedirect(e.target.checked)} />
      <button onClick={buildClient} value="initialize client">
        initialize client
      </button>
    </section>
  )
}

export default ConfigPanel;
