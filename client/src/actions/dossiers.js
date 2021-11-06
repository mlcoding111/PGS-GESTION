import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../utils/constants/actionTypes';
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

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 