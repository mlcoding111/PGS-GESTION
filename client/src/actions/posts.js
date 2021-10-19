import * as api from '../api'

// Action Creators ( function that returns action )

export const getPosts = () => async (dispatch) => { // => async (dispatch) because we are dealing with async logic
    try {
        const { data } = await api.fetchPosts() // get response from API and deconstruct it. Data represent the posts

        dispatch({ type: 'FETCH_ALL', payload: data}) // Payload is the data to send
    } catch (error) {
        console.log(error.message)
    }
    
    const action = { type: 'FETCH_ALL', payload: [] }

    dispatch(action)
}
