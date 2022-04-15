import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getById(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [userId, state])

    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {SingleUserPage};