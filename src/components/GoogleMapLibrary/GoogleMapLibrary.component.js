import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMapLibrary.style.css';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

export default class GoogleMapLibrary extends Component {
  static defaultProps = {
    center: {
      lat: 49.2246,
      lng: -123.1087,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <h3>↓↓↓↓↓ Google Map WITH Library ↓↓↓↓↓</h3>
        <div
          id="google-map-library"
          style={{ height: "350px", width: "700px" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={49.2246} lng={-123.1087} text="My Marker" />
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}