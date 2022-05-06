import {Outlet} from "react-router-dom";
import {FC} from "react";

import {CarForm, Cars} from "../../components";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};