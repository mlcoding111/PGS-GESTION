// Handle update dispatch
import { updatePost } from '../../../actions/posts'
import { updateDossier } from '../../../actions/dossiers'
import { updatePaiement} from '../../../actions/paiements'
import { updateFacturation } from '../../../actions/facturations'
import { updateEmployer } from '../../../actions/employers'

import returnCurrentSection from '../../UtilityFunctions'

const handleUpdateDispatch = (pathname, values, id) => {
    pathname = returnCurrentSection(pathname)
    console.log('THIS IS IT ', id, values)
    switch(pathname){
        case "dossiers":
            return updateDossier(id, values)
            break
        case "paiements":
            return updatePaiement(values)
            break;
        case "employés":
            return updateEmployer(values)
            break
        case "facturations":
            return updateFacturation(values)
        default: 
            console.log('error')
    }
}

export default handleUpdateDispatch