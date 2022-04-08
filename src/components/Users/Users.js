import {usersService} from "../../services";
import {useEffect, useState} from "react";
import {User} from "../User/User";

const Users = ({setUser, setUserIdForPosts}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>)
            }
        </div>
    );
};

export {Users};