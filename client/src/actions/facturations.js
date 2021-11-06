import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api'

// Action Creators ( function that returns action )

export const getFacturations = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchFacturations() // get response from API and deconstruct it. Data represent the facturations

        dispatch({ type: FETCH_ALL, payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
}

export const createFacturation = (facturation) => async (dispatch) => {
    try {
        const { data } = await api.createFacturation(facturation) // make api request to the server

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 