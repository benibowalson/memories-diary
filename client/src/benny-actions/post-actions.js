
import * as myAPI from '../benny-api'

//Action Creators: functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        const myData  = await myAPI.fetchPosts()
        //const myAction = { type: 'FETCH_ALL', payload: myData }
        dispatch({ type: 'FETCH_ALL', payload: myData.data })        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const myData  = await myAPI.createPost(post)
        dispatch({ type: 'CREATE', payload: myData.data })
    } catch (error) {
        console.log(error)
    }
}