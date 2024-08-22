import {useEffect, useState} from "react";
import {getApiResponses} from "../types/iss-api-responses";

export default function useGeoApi(iteration = 10000) {
    const [position, setPosition] = useState<getApiResponses>();

    useEffect(() => {
        fetch('http://localhost:3001/geo')
            .then(reps => reps.json())
            .then(data => setPosition(data))
            .catch((err) => console.log(err));
    }, []);

    return position;
}
