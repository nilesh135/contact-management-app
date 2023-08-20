import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Country {
  name: string;
  lat: number;
  lon: number;
  active: number;
  recovered: number;
  deaths: number;
}

const MapsDashboard: React.FC = () => {
  const countries: Country[] = [
    { name: 'Country A', lat: 40, lon: -100, active: 500, recovered: 300, deaths: 50 },
    { name: 'Country B', lat: 10, lon: 0, active: 2000, recovered: 1500, deaths: 100 },
    // Add more countries
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Maps Dashboard</h2>
      <div className="w-full md:w-2/3 mx-auto">
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {countries.map((country, index) => (
            <Marker key={index} position={[country.lat, country.lon]}>
              <Popup>
                <div>
                  <h3>{country.name}</h3>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered Cases: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapsDashboard;
