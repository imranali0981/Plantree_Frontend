// @ts-nocheck
// LocationMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ recommendedLocation }) => {
  const [locationLabel, setLocationLabel] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const apiKey = 'c6045a3e3a514bd0b05493a938503710'; // Replace with your actual key

  // useEffect(() => {
  //   try{
  //   axios.get("https://haseebkhan09876-plantation-predictor.hf.space/predict_plantation", {})
  //   .then((Response) => {
  //     const data = Response.data.result.most_needed_area;
  //     console.log("Response from the server2 -> ", data);
  //   })
  //   }catch(err){
  //     console.error("Error Fetching the location -> ", err);
  //   }
  // },[]);
  

  useEffect(() => {
  // Check if map is already initialized
  if (mapRef.current) return;

  mapRef.current = L.map('map').setView([24.8607, 67.0011], 11);

  L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKey}`, {
    attribution: '&copy; OpenStreetMap contributors, Geoapify',
  }).addTo(mapRef.current);
}, []);


  useEffect(() => {
    if (!recommendedLocation) return;

    const getCoordinates = async () => {
      try {
        const res = await axios.get(`https://api.geoapify.com/v1/geocode/search`, {
          params: {
            text: recommendedLocation,
            apiKey: apiKey
          }
        });

        const loc = res.data.features[0];
        const { lat, lon, formatted } = loc.properties;

        setLocationLabel(formatted);

        if (markerRef.current) {
          mapRef.current.removeLayer(markerRef.current);
        }

        markerRef.current = L.marker([lat, lon])
          .addTo(mapRef.current)
          .bindPopup(`🌳 Suggested Tree Plantation Area: ${formatted}`)
          .openPopup();

        mapRef.current.setView([lat, lon], 14);
      } catch (err) {
        console.error('Error fetching Geoapify location:', err);
        setLocationLabel("Location not found");
      }
    };

    getCoordinates();
  }, [recommendedLocation]);

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-2">🌱 Most Needed Area for Trees</h2>
      <p className="mb-2 text-lg">{locationLabel && `📍 ${locationLabel}`}</p>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default LocationMap;
