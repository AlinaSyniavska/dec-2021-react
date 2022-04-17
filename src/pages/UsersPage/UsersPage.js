import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import cssUsersPage from './UsersPage.module.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={cssUsersPage.usersContainer}>
            <div>
                {
                    users ?
                        users.map(user => <User key={user.id} user={user}/>)
                        : <p>Loading...</p>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};