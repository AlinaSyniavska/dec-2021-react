import {NavLink, Outlet} from "react-router-dom";

import cssMainLayout from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={cssMainLayout.nav}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};