import axios from 'axios'

const url = "http://localhost:5000/"


// Posts
export const fetchPosts = () => axios.get(`${url}posts`)
export const createPost = (newPost) => axios.post(`${url}posts`, newPost)

// Dossiers
export const fetchDossiers = () => axios.get(`${url}dossiers`)
export const createDossier = (newDossier) => axios.post(`${url}dossiers`, newDossier)

// Facturations
export const fetchFacturations = () => axios.get(`${url}facturations`)
export const createFacturation = (newFacturation) => axios.post(`${url}facturations`, newFacturation)

// Paiements
export const fetchPaiements = () => axios.get(`${url}paiements`)
export const createPaiement = (newPaiement) => axios.post(`${url}paiements`, newPaiement)

// Employés
export const fetchEmployers = () => axios.get(`${url}employers`)
export const createEmployer = (newEmployer) => axios.post(`${url}employers`, newEmployer)