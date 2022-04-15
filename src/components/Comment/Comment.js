const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Comment};

