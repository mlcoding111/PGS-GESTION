export default (dossiers = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload // All the dossiers           
        case 'CREATE':
            return [...dossiers, action.payload]
        case 'UPDATE':
            return dossiers.map((dossier)=> dossier._id === action.payload._id ?  action.payload : dossier) // If id match the selected id, return the updated data
        case 'DELETE':
            const ids = action.payload.ids.filter(item => item._id)
            ids.forEach((item) => {
                console.log(item._id)
                dossiers = dossiers.filter((dossier)=> dossier._id !== item._id)
            })
            // dossiers.filter((dossier)=> dossier._id !== "618f2db02ceaa346c08cddc3")
            return dossiers
        default:
            return dossiers
    }
}