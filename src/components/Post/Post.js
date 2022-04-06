import React from 'react';

import './Posts.css';

export const Post = (props) => {
     const {post} = props;

     const {title, body} = post;

    return (
        <div className={'post-card'}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};
