/* global gapi */
import React from "react";
import Logo from "./images/logo.png";

class VerticalNav extends React.Component {
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      window.location.replace("/");
    });
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <img src={Logo} width="112" height="100" alt="verticalimg" />

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Profile</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Notifications</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div className="navbar-brand">
            <img src={Logo} width="112" height="500" alt="verticalimg3" />

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-item">
            <div className="buttons">
              <a
                href="/"
                className="button is-primary is-light is-danger"
                onClick={this.signOut}
              >
                <strong>Sign Out</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default VerticalNav;