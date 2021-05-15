//A reducer takes in a state and an action, does some logic and returns a state

//Based on the action, return the appropiate state
//State needs to have a default value assigned, use an empty array
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; //posts that has been retrieved from backend (look at actions/posts.js)
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}


