import {NavLink, Outlet} from "react-router-dom";

import cssMainLayout from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={cssMainLayout.nav}>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/create_car'}>Create Car</NavLink>
                <NavLink to={'/update_car'}>Update Car</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};