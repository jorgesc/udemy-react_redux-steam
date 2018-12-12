import React from "react";
import {connect} from "react-redux";

import {signInStart, signOutStart, checkIsSignedIn} from "../actions";

const clientId =
  "716795556474-c1cm50j5tpm5qqdg83u2han127u44h2r.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({clientId, scope: "email"}).then(() => {
        this.props.checkIsSignedIn();
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(e => {
          console.log("WTF", e);
        });
      });
    });
  }

  onSignInClick = () => {
    this.props.signInStart();
  };

  onSignOutClick = () => {
    this.props.signOutStart();
  };

  _createLoginButton(text, f, loading = false) {
    let classes = "ui red google button";
    if (loading) classes += " disabled";
    const iconClasses = loading ? "spinner loading icon" : "google icon";
    return (
      <button className={classes} onClick={f}>
        <i className={iconClasses} />
        {text}
      </button>
    );
  }

  renderAuthButton() {
    if (this.props.userId === null) {
      return this._createLoginButton("Loading", null, true);
    } else if (this.props.userId === false) {
      return this._createLoginButton("Sign In With Google", this.onSignInClick);
    } else {
      return this._createLoginButton("Sign Out", this.onSignOutClick);
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
};

export default connect(
  mapStateToProps,
  {signInStart, signOutStart, checkIsSignedIn},
)(GoogleAuth);
