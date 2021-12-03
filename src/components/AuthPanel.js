const AuthPanel = (props) => {
  const logIn = () => {
    const query = new URLSearchParams(window.location.search);
    const code = query ? query.get('code') : null;
    props.APIClient.authentication.logIn(code);
    window.history.pushState({}, document.title, window.location.pathname);
  }

  const logOut = () => {
    props.APIClient.authentication.logOut();
  }

  if (window.location.search && (new URLSearchParams(window.location.search)).get('code'))
    logIn();

  return (
    <section>
      <h2>Option Chain</h2>
      { !props.isLogIn && <p>
        If logInRedirect is set to true, click login to be redirected to TD Ameritrade OAuth portal.
      </p> }
      { !props.isLogIn && <button onClick={logIn} >login</button> }
      { props.isLogIn && <button onClick={logOut} >logout</button> }
    </section>
  );
};

export default AuthPanel;
