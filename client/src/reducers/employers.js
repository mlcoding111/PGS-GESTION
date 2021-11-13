export default (employers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the employers           
        case 'CREATE':
            return [...employers, action.payload]
        case 'UPDATE':
            return employers.map((employer)=> employer._id === action.payload._id ?  action.payload : employer) // If id match the selected id, return the updated data
        case 'DELETE':
            const ids = action.payload.ids.filter(item => item._id)
            ids.forEach((item) => {
                console.log(item._id)
                employers = employers.filter((employer)=> employer._id !== item._id)
            })
            // employers.filter((employer)=> employer._id !== "618f2db02ceaa346c08cddc3")
            return employers
            default:
            return employers
    }
}