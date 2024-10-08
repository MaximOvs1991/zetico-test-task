import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"

import {useEffect, useState} from "react";
import useGeoApi from "./useGeoApi";

const KEY = 'nHw43szTVhRqhYWzaW9x'

export default function useMap(){
    const [renderIteration, setRenderIteration] = useState(0);
    const position = useGeoApi(renderIteration);

    useEffect(() => {
        if (!position) return;

        const map = L.map('map', {
            center: L.latLng(position.latitude, position.longitude),
            zoom: 14,
        });

        const icon = L.icon({
            iconUrl: markerIconPng
        });

        L.marker([position.latitude, position.longitude], { icon: icon }).addTo(map);
        L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${KEY}`,{ //style URL
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            crossOrigin: true
        }).addTo(map);

        return () => {
            map.remove()
        };
    }, [position]);

    return setRenderIteration;
}