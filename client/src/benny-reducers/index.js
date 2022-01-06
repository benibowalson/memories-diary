import { CREATE, UPDATE, FETCH_ALL, DELETE, LIKE } from '../benny-constants/actionTypes'

export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload]
        case UPDATE:
        case LIKE:
            return posts.map((aPost) => aPost._id === action.payload._id ? action.payload : aPost)
        case DELETE:
            return posts.filter((aPost) => aPost._id !== action.payload)
        default:
            return posts
    }
}