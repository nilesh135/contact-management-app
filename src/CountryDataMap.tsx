import React from 'react';
import { useQuery } from 'react-query';

const CountryDataMap: React.FC = () => {
  const { data: countriesData } = useQuery('countriesData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    return data;
  });

  // ... rest of the component
};

export default CountryDataMap;


import React from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CountryDataMap: React.FC = () => {
  const { data: countriesData } = useQuery('countriesData', async () => {
    // Fetch country-specific data...
  });

  if (!countriesData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Country Data Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countriesData.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CountryDataMap;
