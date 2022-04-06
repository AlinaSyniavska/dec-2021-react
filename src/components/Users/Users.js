import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../User/User";
import '../../App.css';

export const Users = () => {

    const [users, setUsers] = useState([]);
    // const [users, setUsers] = useState(null);

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value))
    }, []);

    return (
        <div className={'top-item'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
                // users && users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};
