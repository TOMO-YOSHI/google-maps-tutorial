import React, { Component } from 'react';
import './GoogleMap.style.css';

export default class GoogleMap extends Component {
  googleMapRef = React.createRef();

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: {
        lat: 49.2246,
        lng: -123.1087,
      },
      disableDefaultUI: true,
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 49.2246, lng: -123.1087 },
      map: this.googleMap,
    });

  componentDidMount() {
    const googleScript = document.createElement("script");
    googleScript.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3>↓↓↓↓↓ Google Map WITHOUT Library ↓↓↓↓↓</h3>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: "700px", height: "350px" }}
        />
      </React.Fragment>
    );
  }
}