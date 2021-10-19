export default (posts = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the posts           
        case 'CREATE':
            return posts
        default:
            return posts
    }
}