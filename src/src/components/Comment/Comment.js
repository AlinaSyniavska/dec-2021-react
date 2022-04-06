import './Comment.css'

export const Comment = (props) => {
    const {comment} = props;
    const {name, email, body} = comment;

    return (
        <div className={'comment-card'}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};


