import {useEffect, useState} from "react";

import {LaunchShip} from "../LaunchShip/LaunchShip";
import "./Launches.css"

export const LaunchShips = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setLaunches(value))
    }, [])

    return (
        <div className={'launches'}>
            {
                launches.filter(launch => launch.launch_year !== '2020')
                .map(launch => <LaunchShip
                    key={launch.flight_number}
                    mission_name={launch.mission_name}
                    launch_year={launch.launch_year}
                    mission_patch_small={launch.links.mission_patch_small}/>)
            }
        </div>
    );
};
