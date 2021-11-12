export default (dossiers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the dossiers           
        case 'CREATE':
            return [...dossiers, action.payload]
        case 'UPDATE':
            return dossiers.map((dossier)=> dossier._id === action.payload._id ?  action.payload : dossier) // If id match the selected id, return the updated data
        default:
            return dossiers
    }
}