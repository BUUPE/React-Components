import React from "react";
import PropTypes from "prop-types";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase/context";
import { Firebase } from "../Firebase/firebase";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    _initFirebase = false;
    _isMounted = false;
    state = {
      authUser: null,
    };

    safeSetState = (state) => this._isMounted && this.setState(state);

    firebaseInit = () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true;

        this.listener = this.props.firebase.onAuthUserListener(
          (authUser) => {
            localStorage.setItem("authUser", JSON.stringify(authUser));
            this.safeSetState({ authUser });
          },
          () => {
            localStorage.removeItem("authUser");
            this.safeSetState({ authUser: null });
          }
        );
      }
    };

    componentDidMount() {
      this._isMounted = true;
      this.safeSetState({
        authUser: JSON.parse(localStorage.getItem("authUser")),
      });

      this.firebaseInit();
    }

    componentDidUpdate() {
      this.firebaseInit();
    }

    componentWillUnmount() {
      this._isMounted = false;
      this.listener && this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.instanceOf(Firebase),
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
