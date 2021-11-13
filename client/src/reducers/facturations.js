export default (facturations = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the facturations           
        case 'CREATE':
            return [...facturations, action.payload]
        case 'UPDATE':
            return facturations.map((facturation)=> facturation._id === action.payload._id ?  action.payload : facturation) // If id match the selected id, return the updated data
        case 'DELETE':
            const ids = action.payload.ids.filter(item => item._id)
            ids.forEach((item) => {
                console.log(item._id)
                facturations = facturations.filter((facturation)=> facturation._id !== item._id)
            })
            // facturations.filter((facturation)=> facturation._id !== "618f2db02ceaa346c08cddc3")
            return facturations
        default:
            return facturations
    }
}