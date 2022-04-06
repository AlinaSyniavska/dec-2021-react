import "./Launch.css"

export const LaunchShip = (props) => {

    const {mission_name, launch_year, mission_patch_small} = props;

    return (
        <div className={'launch-card'}>
            <p>{mission_name} - {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};
