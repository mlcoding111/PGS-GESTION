// Handle Create dispatch
import { createPost } from '../../../actions/posts'
import { createDossier } from '../../../actions/dossiers'
import { createPaiement} from '../../../actions/paiements'
import { createFacturation } from '../../../actions/facturations'
import { createEmployer } from '../../../actions/employers'

import returnCurrentSection from '../../UtilityFunctions'

const handleCreateDispatch = (pathname, values) => {
    pathname = returnCurrentSection(pathname)
    switch(pathname){
        case "dossiers":
            return createDossier(values)
            break
        case "paiements":
            return createPaiement(values)
            break;
        case "employés":
            return createEmployer(values)
            break
        case "facturations":
            return createFacturation(values)
        default: 
            return createPost(values)
    }
}

export default handleCreateDispatch