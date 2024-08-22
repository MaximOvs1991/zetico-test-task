import React from 'react';
import './App.css';
import useMap from './hooks/useMap';

function App() {
  useMap();

  return (
      <div id="map"></div>
  );
}

export default App;
