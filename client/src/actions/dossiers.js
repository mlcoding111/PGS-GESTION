import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../utils/constants/actionTypes';
import { toast } from "react-toastify";
import playAudio from '../utils/Audio'
import * as api from '../api'

// Action Creators ( function that returns action )

export const getDossiers = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchDossiers() // get response from API and deconstruct it. Data represent the dossiers
        dispatch({ type: FETCH_ALL, payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
}

export const createDossier = (dossier) => async (dispatch) => {
    try {
        const { data } = await api.createDossier(dossier) // make api request to the server

        toast.success(`Dossier ajouté : ${data.nomClient}`);        
        playAudio()
        
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 

export const updateDossier = (id, dossier) => async (dispatch)=>{
    try {
        const { data } = await api.updateDossier(id, dossier)

        toast.success(`Dossier : ${data.nomClient} modifié avec succès !`);        
        playAudio()
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteDossiers = (ids) => async (dispatch) => {
    try {
        const {data} = await api.deleteDossiers(ids)
        dispatch({ type: DELETE, payload: data})
    } catch (error) {
        console.log(error)
    }
}