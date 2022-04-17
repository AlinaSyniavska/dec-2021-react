import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {UserDetails} from "../../components";


const SingleUserPage = () => {
    const {state} = useLocation();
    const {idUser} = useParams();
    const [user, setUser] = useState(state);

    useEffect(() => {
        if (!state) {
            userService.getById(idUser).then(({data}) => setUser(data))
        } else {
            setUser(state);
        }
    }, [idUser, state])

    return (
        <div>
            <UserDetails user={user}/>
            <Outlet/>   {/*for user's posts*/}
        </div>
    );
};

export {SingleUserPage};