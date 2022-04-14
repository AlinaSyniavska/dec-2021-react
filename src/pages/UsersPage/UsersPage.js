import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import cssPage from '../page.module.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={cssPage.pageComponent}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};