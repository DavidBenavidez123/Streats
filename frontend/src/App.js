import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <ul>
            <li>
              <NavLink exact to="/" className="button">
                <img
                  className="logo"
                  alt="filmsy-logo"
                  src="https://fontmeme.com/permalink/190401/7b1dbd214dbed85b4cb6eba1ae91bc8d.png"
                />
              </NavLink>
            </li>
            <li>Burger menu here</li>
          </ul>
        </div>
        <div className="App">
          <div className="main-content">
            {/* <Route exact path="/" component={} />
          <Route path="/account" component={} /> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
