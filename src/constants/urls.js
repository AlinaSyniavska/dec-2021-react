const baseURL = process.env.REACT_APP_API;

const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
    albums: '/albums'
}

export default baseURL;
export {
    urls
}