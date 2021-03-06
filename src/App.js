import React, { useEffect, useContext } from "react";
import { hot } from "react-hot-loader";
import Layout, { setLayoutBase } from "./components/Layout";
import {
  withAuthorization,
  setWithAuthorizationWrapper,
  WithAuthorizationClass,
  AuthUserContext,
} from "./components/Session";
import { withFirebase } from "./components/Firebase";

const test = (
  <div>
    <h1>Unauthorized</h1>
  </div>
);
setWithAuthorizationWrapper((props) => (
  <WithAuthorizationClass
    {...props}
    firebaseAuthNext={(authUser) => console.log("authUser", authUser)}
    firebaseAuthFallback={() => console.log("doing fallback")}
    authorizationFailed={test}
  />
));

const config = {
  apiKey: "AIzaSyBxBIbTYbRuqP1np-ri4YaJ0H6OYK4L46g",
  authDomain: "upe-website-fa07a.firebaseapp.com",
  databaseURL: "https://upe-website-fa07a.firebaseio.com",
  projectId: "upe-website-fa07a",
  storageBucket: "upe-website-fa07a.appspot.com",
  messagingSenderId: "896060764020",
  appId: "1:896060764020:web:331114a396e41adfa30621",
  measurementId: "G-BV6VQMMSQ5",
};

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

setLayoutBase(({ children }) => (
  <div>
    <strong>This is a custom layout base!</strong>
    {children}
  </div>
));

const Login = withFirebase(({ firebase }) => {
  const authUser = useContext(AuthUserContext);
  useEffect(() => {
    if (firebase && !authUser) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const token = urlParams.get("token");
      if (token) {
        firebase
          .doSignInWithToken(token)
          .then(() => window.history.pushState({}, document.title, "/"));
      } else {
        setTimeout(
          () =>
            (window.location.href = "https://upe-authenticator.herokuapp.com/"),
          3000
        );
      }
    }
  }, [firebase, authUser]);

  const handleLogout = () => firebase.doSignOut();

  return authUser ? (
    <button onClick={handleLogout}>logout</button>
  ) : (
    <h3>gonna log u in</h3>
  );
});

const App = () => (
  <Layout firebaseConfig={config}>
    <h1>Hello World!</h1>
    <BuggyCounter />
    <Login />
    <Authorized />
  </Layout>
);

const Special = () => <h1>Im secret</h1>;
const condition = (authUser) => !!authUser;
const Authorized = withAuthorization(condition)(Special);
export default hot(module)(App);
