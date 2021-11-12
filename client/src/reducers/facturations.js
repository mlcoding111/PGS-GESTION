export default (facturations = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the facturations           
        case 'CREATE':
            return [...facturations, action.payload]
        case 'UPDATE':
            return facturations.map((facturation)=> facturation._id === action.payload._id ?  action.payload : facturation) // If id match the selected id, return the updated data
        default:
            return facturations
    }
}