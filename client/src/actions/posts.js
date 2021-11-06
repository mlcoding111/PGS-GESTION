import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../utils/constants/actionTypes';
import * as api from '../api'

// Action Creators ( function that returns action )

export const getPosts = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchPosts() // get response from API and deconstruct it. Data represent the posts

        dispatch({ type: FETCH_ALL, payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post) // make api request to the server

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
} 