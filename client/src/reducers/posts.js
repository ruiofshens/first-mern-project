//A reducer takes in a state and an action, does some logic and returns a state

//Based on the action, return the appropiate state
//State needs to have a default value assigned, use an empty array
export default (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            //If update post and original post have the same ID, return newly updated post, otherwise return original post
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'FETCH_ALL':
            return action.payload; //posts that has been retrieved from backend (look at actions/posts.js)
        case 'CREATE':
            return [...posts, action.payload]; //spread the posts, and add a new post which is stored in the payload
        default:
            return posts;
    }
}


