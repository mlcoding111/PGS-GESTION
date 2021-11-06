// Handle get dispatch
import { getPosts } from '../../../actions/posts'
import { getDossiers } from '../../../actions/dossiers'
import { getPaiements } from '../../../actions/paiements'
import { getFacturations } from '../../../actions/facturations'
import { getEmployers } from '../../../actions/employers'

const handleGetDispatch = (pathname) => {
    switch(pathname){
        case "dossiers":
            return getDossiers()
            break
        case "paiements":
            return getPaiements()
            break;
        case "employés":
            return getEmployers()
            break
        case "facturations":
            return getFacturations()
        default: 
            return getPosts()
    }
}

export default handleGetDispatch