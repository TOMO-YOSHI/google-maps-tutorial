import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMapLibrary.style.css';

// require("dotenv").config();
const api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

console.log(api_key);

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

export default class GoogleMapLibrary extends Component {
  static defaultProps = {
    center: {
      lat: 49.2246,
      lng: -123.1087,
    },
    zoom: 11,
  };

  handleApiLoaded = (map, maps) => {
    let directionsService = new maps.DirectionsService();
    let directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer.setMap(map)

    directionsService.route(
      {
        travelMode: maps.TravelMode.DRIVING,
        origin: new maps.LatLng(49.2246, -123.1087),
        destination: new maps.LatLng(49.2206, -123.1107),
      },
      (response, status) => {
        if (status === "OK") {
          console.log("OK");
          console.log('response', response)
          console.log('status', status)
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    )
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
            bootstrapURLKeys={{ key: api_key }}
            // bootstrapURLKeys={{ key: "" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleApiLoaded(map, maps)
            }
            // onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
          >
            <AnyReactComponent lat={49.2246} lng={-123.1087} text="My Marker" />
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}