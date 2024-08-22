import {useCallback, useEffect, useState} from "react";
import {getApiResponses} from "../types/iss-api-responses";

export default function useGeoApi(iteration = 10000) {
    const [position, setPosition] = useState<getApiResponses | null>(null);
    let intervalId: number | undefined;
    const runFetch = useCallback(() => {
        return fetch('http://localhost:3001/geo')
            .then(reps => reps.json())
            .then(data => setPosition(data))
            .catch((err) => {
                setPosition(null)
                throw err;
            });
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await runFetch();
                intervalId = window.setInterval(() => {
                    runFetch();
                }, iteration);
            } catch {
                return;
            }
        })()

        return () => {
            intervalId && clearInterval(intervalId);
        }
    }, []);

    return position;
}
