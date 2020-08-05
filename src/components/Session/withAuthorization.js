import React, { Component, createElement } from "react";
import PropTypes from "prop-types";

import AuthUserContext from "./context";
import Firebase, { withFirebase } from "../Firebase";

export class WithAuthorizationClass extends Component {
  _initFirebase = false;
  static contextType = AuthUserContext;

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.listener = this.props.firebase.onAuthUserListener(
        this.props.firebaseAuthNext,
        this.props.firebaseAuthFallback
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
          this.props.condition(authUser)
            ? createElement(this.props.authorizationPassed, { ...this.props })
            : this.props.authorizationFailed
        }
      </AuthUserContext.Consumer>
    );
  }
}

WithAuthorizationClass.propTypes = {
  firebase: PropTypes.instanceOf(Firebase),
  firebaseAuthNext: PropTypes.func.isRequired,
  firebaseAuthFallback: PropTypes.func.isRequired,
  condition: PropTypes.func.isRequired,
  authorizationPassed: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
  authorizationFailed: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

let WithAuthorizationWrapper = (props) => <WithAuthorizationClass {...props} />;
export const setWithAuthorizationWrapper = (Component) => {
  WithAuthorizationWrapper = Component;
};

const withAuthorization = (condition) => (Component) => {
  const withcondition = () => (
    <WithAuthorizationWrapper
      condition={condition}
      authorizationPassed={Component}
    />
  );
  return withFirebase(withcondition);
};
export default withAuthorization;
