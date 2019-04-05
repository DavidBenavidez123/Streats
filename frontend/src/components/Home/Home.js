import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.css";

const google = window.google;

class Home extends Component {
  // render map
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBy9fYQkYF5lv_-xzaK1HWvqsCZoicht0E&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  // gooogle map
  //   initMap = () => {
  //     var california = { lat: 37.4419, lng: -122.1419 };
  //     var map = new google.maps.Map(document.getElementById("map"), {
  //       center: california,
  //       zoom: 13
  //     });

  //     var infowindow = new google.maps.InfoWindow({
  //       content: document.getElementById("form")
  //     });

  //     var messagewindow = new google.maps.InfoWindow({
  //       content: document.getElementById("message")
  //     });

  //     google.maps.event.addListener(map, "click", function(event) {
  //       var marker = new google.maps.Marker({
  //         position: event.latLng,
  //         map: map
  //       });

  //       google.maps.event.addListener(marker, "click", function() {
  //         infowindow.open(map, marker);
  //       });
  //     });
  //   };

  saveData = () => {
    // var name = escape(document.getElementById('name').value);
    // var address = escape(document.getElementById('address').value);
    // var type = document.getElementById('type').value;
    // var latlng = marker.getPosition();
    // var url = 'phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
    //           '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();
    // downloadUrl(url, function(data, responseCode) {
    //   if (responseCode == 200 && data.length <= 1) {
    //     infowindow.close();
    //     messagewindow.open(map, marker);
    //   }
    // });
  };

  downloadUrl = (url, callback) => {
    // var request = window.ActiveXObject
    //   ? new ActiveXObject("Microsoft.XMLHTTP")
    //   : new XMLHttpRequest();
    // request.onreadystatechange = function() {
    //   if (request.readyState == 4) {
    //     request.onreadystatechange = doNothing;
    //     callback(request.responseText, request.status);
    //   }
    // };
    // request.open("GET", url, true);
    // request.send(null);
  };

  doNothing = () => {};

  // componentDidMount
  componentDidMount() {
    this.renderMap();
  }

  render() {
    return (
      <div className="home-container">
        <div className="map-container">
          <div id="map" height="460px" width="100%" />
          <div id="form">
            <table>
              <tr>
                <td>Name:</td>{" "}
                <td>
                  <input type="text" id="name" />{" "}
                </td>{" "}
              </tr>
              <tr>
                <td>Address:</td>{" "}
                <td>
                  <input type="text" id="address" />{" "}
                </td>{" "}
              </tr>
              <tr>
                <td>Type:</td>{" "}
                <td>
                  <select id="type">
                    {" "}
                    +
                    <option value="bar" SELECTED>
                      bar
                    </option>
                    <option value="restaurant">restaurant</option>
                  </select>{" "}
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input type="button" value="Save" onclick="saveData()" />
                </td>
              </tr>
            </table>
          </div>
          <div id="message">Location saved</div>
        </div>
        <div className="map-selections">s</div>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Home);
