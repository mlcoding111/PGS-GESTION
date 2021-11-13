// Handle update dispatch
import { updatePost } from '../../../actions/posts'
import { updateDossier } from '../../../actions/dossiers'
import { updatePaiement} from '../../../actions/paiements'
import { updateFacturation } from '../../../actions/facturations'
import { updateEmployer } from '../../../actions/employers'

import returnCurrentSection from '../../UtilityFunctions'

const handleUpdateDispatch = (pathname, values, id) => {
    pathname = returnCurrentSection(pathname)
    switch(pathname){
        case "dossiers":
            return updateDossier(id, values)
            break
        case "paiements":
            return updatePaiement(id, values)
            break;
        case "employés":
            return updateEmployer(id, values)
            break
        case "facturations":
            return updateFacturation(id, values)
        default: 
            console.log('error')
    }
}

export default handleUpdateDispatch