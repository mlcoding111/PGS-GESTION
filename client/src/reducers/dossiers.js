export default (dossiers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the dossiers           
        case 'CREATE':
            return [...dossiers, action.payload]
        default:
            return dossiers
    }
}