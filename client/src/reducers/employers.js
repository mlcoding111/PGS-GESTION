export default (employers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the employers           
        case 'CREATE':
            return [...employers, action.payload]
        case 'UPDATE':
            return employers.map((employer)=> employer._id === action.payload._id ?  action.payload : employer) // If id match the selected id, return the updated data
        default:
            return employers
    }
}