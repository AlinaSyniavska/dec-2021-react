import postCss from './Post.module.css'

const Post = ({post}) => {

    const {title, body} = post;

    return (
        <div className={postCss.postItem}>
            <h4>{title}</h4>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Post};