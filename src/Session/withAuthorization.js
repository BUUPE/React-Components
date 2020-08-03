import React, {cloneElement} from "react";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase/context";

// wrap this in something that passes down the wrops and send that to generateWithAuthorization
class WithAuthorization extends React.Component {
  _initFirebase = false;

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.listener = this.props.firebase.onAuthUserListener(this.props.firebaseAuthNext, this.props.firebaseAuthFallback
      );
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  componentWillUnmount() {
    this.listener && this.listener();
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          this.props.condition(authUser) ? (
            {cloneElement(this.props.authorizationPassed, {...this.props})}
          ) : (
            {this.props.authorizationFailed}
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

let Wrapper = WithAuthorization;
const withAuthorization = (condition) => (Component) => withFirebase(<Wrapper  />);
const setWrapper = Component => {Wrapper = Component}; // call this early
export default withAuthorization;
