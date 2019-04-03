import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="map">adsfdsfsfd</div>
        <div className="map-selections">s</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Home);
