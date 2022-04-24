import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../../redux/action.creators";

const Users = () => {

    // let usersDefaultState = useSelector(state => state);
    // let usersDefaultState = useSelector(state => state.usersState);
    let usersDefaultState = useSelector(({usersState}) => usersState);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers);
    }, [])

    return (
        <div>
            {
                usersDefaultState.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export {Users};