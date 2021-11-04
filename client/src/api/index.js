import axios from 'axios'

const url = "http://localhost:5000/"


// Posts
export const fetchPosts = () => axios.get(`${url}posts`)
export const createPost = (newPost) => axios.post(`${url}posts`, newPost)

// Dossiers
export const fetchDossiers = () => axios.get(`${url}dossiers`)
export const createDossier = (newDossier) => axios.post(`${url}posts`, newDossier)