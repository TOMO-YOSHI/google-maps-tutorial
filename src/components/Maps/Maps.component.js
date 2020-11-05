import React, {useState} from 'react';
import GoogleMap from '../GoogleMap/GoogleMap.component.js';
import GoogleMapLibrary from '../GoogleMapLibrary/GoogleMapLibrary.component.js';

const Maps = () => {
    const [mapSwitch, setMapSwitch] = useState(true);

    const mapChange = () => {
        setMapSwitch(!mapSwitch);
    }

    return (
      <div>
        <button onClick={mapChange} style={{margin: "2rem"}}>Map Switch</button>
        {mapSwitch ? <GoogleMap /> : <GoogleMapLibrary />}
      </div>
    );
}

export default Maps;