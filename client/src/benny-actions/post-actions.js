import { CREATE, UPDATE, FETCH_ALL, DELETE, LIKE } from '../benny-constants/actionTypes'
import * as myAPI from '../benny-api'

//Action Creators: functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        const myData  = await myAPI.fetchPosts()
        //const myAction = { type: 'FETCH_ALL', payload: myData }
        dispatch({ type: FETCH_ALL, payload: myData.data })        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const myData  = await myAPI.createPost(post)
        dispatch({ type: CREATE, payload: myData.data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        //use the word 'data' in destructure; matches a field in the response
        const { data } = await myAPI.updatePost(id, post)
        //console.log("UPDATE", data)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await myAPI.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await myAPI.likePost(id)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error)
    }
}