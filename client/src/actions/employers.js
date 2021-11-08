import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../utils/constants/actionTypes';
import * as api from '../api'
import playAudio from '../utils/Audio'
import { toast } from "react-toastify";

// Action Creators ( function that returns action )

export const getEmployers = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchEmployers() // get response from API and deconstruct it. Data represent the Employers

        dispatch({ type: FETCH_ALL, payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
}

export const createEmployer = (employer) => async (dispatch) => {
    try {
        const { data } = await api.createEmployer(employer) // make api request to the server

        toast.success(`Employer ajouté : ${data.prenom} ${data.nom}`);        
        playAudio()

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 