export default (paiements = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the paiements           
        case 'CREATE':
            return [...paiements, action.payload]
        default:
            return paiements
    }
}