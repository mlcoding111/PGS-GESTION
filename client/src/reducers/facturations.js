export default (facturations = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the facturations           
        case 'CREATE':
            return [...facturations, action.payload]
        default:
            return facturations
    }
}