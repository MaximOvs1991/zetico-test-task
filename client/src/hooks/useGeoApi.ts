import {useCallback, useEffect, useState} from "react";
import {getApiResponses} from "../types/iss-api-responses";

export default function useGeoApi(iteration = 0, interval = 10000) {
    const [position, setPosition] = useState<getApiResponses | null>(null);
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
        let intervalId: number | undefined;

        (async () => {
            try {
                await runFetch();
                intervalId = window.setInterval(() => {
                    runFetch();
                }, interval);
            } catch {
                return;
            }
        })()

        return () => {
            intervalId && clearInterval(intervalId);
        }
    }, [iteration, runFetch, interval]);

    return position;
}
