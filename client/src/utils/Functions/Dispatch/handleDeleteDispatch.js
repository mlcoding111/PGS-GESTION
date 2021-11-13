// Handle delete dispatch
import { deletePosts } from '../../../actions/posts'
import { deleteDossiers } from '../../../actions/dossiers'
import { deletePaiements } from '../../../actions/paiements'
import { deleteFacturations } from '../../../actions/facturations'
import { deleteEmployers } from '../../../actions/employers'
import returnCurrentSection from '../../UtilityFunctions'

const handleDeleteDispatch = (pathname, selectedRows) => {
    pathname = returnCurrentSection(pathname)
    switch(pathname){
        case "dossiers":
            return deleteDossiers(selectedRows)
            break
        case "paiements":
            return deletePaiements(selectedRows)
            break;
        case "employés":
            return deleteEmployers(selectedRows)
            break
        case "facturations":
            return deleteFacturations(selectedRows)
        default: 
            return deleteDossiers(selectedRows)
    }
}

export default handleDeleteDispatch