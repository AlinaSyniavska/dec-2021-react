import {Button} from "../Button/Button";

import cssUser from './User.module.css'

const User = ({user}) => {
    
    const {id, name} = user;
    
    return (
        <div className={cssUser.userItem}>
            <div>{id}. {name}</div>
            <div>
                <Button to={id.toString()} state={user}>User's details</Button>
                <Button to={id.toString() + '/albums'}>Albums</Button>
            </div>
        </div>
    );
};

export {User};