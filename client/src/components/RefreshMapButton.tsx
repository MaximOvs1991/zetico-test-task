import {Dispatch, SetStateAction} from "react";

export default function RefreshMapButton({onClick}: {onClick: Dispatch<SetStateAction<number>>}) {
    return <button type="button" onClick={() => onClick(prev => prev + 1)}>Refresh Map</button>
}