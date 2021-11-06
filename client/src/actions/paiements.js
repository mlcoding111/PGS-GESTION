import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api'

// Action Creators ( function that returns action )

export const getPaiements = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchPaiements() // get response from API and deconstruct it. Data represent the paiements

        dispatch({ type: FETCH_ALL, payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
}

export const createPaiement = (paiement) => async (dispatch) => {
    try {
        const { data } = await api.createPaiement(paiement) // make api request to the server

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 