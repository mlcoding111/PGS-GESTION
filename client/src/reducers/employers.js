export default (employers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the employers           
        case 'CREATE':
            return [...employers, action.payload]
        default:
            return employers
    }
}