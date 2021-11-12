import axios from 'axios'

const url = "http://localhost:5000/"


// Posts
export const fetchPosts = () => axios.get(`${url}posts`)
export const createPost = (newPost) => axios.post(`${url}posts`, newPost)

// Dossiers
export const fetchDossiers = () => axios.get(`${url}dossiers`)
export const createDossier = (newDossier) => axios.post(`${url}dossiers`, newDossier)
export const updateDossier = (id, updatedDossier) => axios.patch(`${url}dossiers/${id}`, updatedDossier)

// Facturations
export const fetchFacturations = () => axios.get(`${url}facturations`)
export const createFacturation = (newFacturation) => axios.post(`${url}facturations`, newFacturation)
export const updateFacturation = (id, updatedFacturation) => axios.patch(`${url}facturations/${id}`, updatedFacturation)

// Paiements
export const fetchPaiements = () => axios.get(`${url}paiements`)
export const createPaiement = (newPaiement) => axios.post(`${url}paiements`, newPaiement)
export const updatePaiement = (id, updatedPaiement) => axios.patch(`${url}paiements/${id}`, updatedPaiement)

// Employés
export const fetchEmployers = () => axios.get(`${url}employers`)
export const createEmployer = (newEmployer) => axios.post(`${url}employers`, newEmployer)
export const updateEmployer = (id, updatedEmployer) => axios.patch(`${url}employers/${id}`, updatedEmployer)