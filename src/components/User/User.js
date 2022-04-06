import React from 'react';

import './User.css'

export const User = (props) => {
    const {user} = props;
    const {name, username, email, phone, website} = user;

    return (
        <div className={'user-card'}>
            <h2>{name} ({username})</h2>
            <h3>{email}</h3>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};
