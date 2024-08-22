import React from 'react';
import './App.css';
import useMap from './hooks/useMap';
import RefreshMapButton from "./components/RefreshMapButton";

function App() {
  const setRender = useMap();

  return (
      <>
        <div id="map"></div>
        <RefreshMapButton onClick={setRender} />
      </>
  );
}

export default App;
