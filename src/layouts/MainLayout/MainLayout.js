import {NavLink, Outlet} from "react-router-dom";

import cssMainLayout from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={cssMainLayout.header}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};