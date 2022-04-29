import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";


const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    );
}

export
{
    MainLayout
};