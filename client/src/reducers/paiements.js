export default (paiements = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the paiements           
        case 'CREATE':
            return [...paiements, action.payload]
        case 'UPDATE':
            return paiements.map((paiement)=> paiement._id === action.payload._id ?  action.payload : paiement) // If id match the selected id, return the updated data
        default:
            return paiements
    }
}