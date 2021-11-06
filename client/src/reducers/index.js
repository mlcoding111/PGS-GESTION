import { combineReducers } from "redux";

import posts from './posts'
import dossiers from './dossiers'
import employers from './employers'
import paiements from './paiements'
import facturations from './facturations'


export default combineReducers({ posts, dossiers, paiements, facturations, employers })