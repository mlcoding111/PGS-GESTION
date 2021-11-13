export default (paiements = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the paiements           
        case 'CREATE':
            return [...paiements, action.payload]
        case 'UPDATE':
            return paiements.map((paiement)=> paiement._id === action.payload._id ?  action.payload : paiement) // If id match the selected id, return the updated data
        case 'DELETE':
            const ids = action.payload.ids.filter(item => item._id)
            ids.forEach((item) => {
                console.log(item._id)
                paiements = paiements.filter((paiement)=> paiement._id !== item._id)
            })
            // paiements.filter((paiement)=> paiement._id !== "618f2db02ceaa346c08cddc3")
            return paiements
        
        default:
            return paiements
    }
}