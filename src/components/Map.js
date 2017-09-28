import React from 'react';
import MapField from '../containers/Map-field';
import MapDetails from '../containers/Map-details';

const Map = () => (
    <div>
        <h3>Map:</h3>
        <MapField />
        <hr/>
        <MapDetails />
    </div>
);

export default Map;