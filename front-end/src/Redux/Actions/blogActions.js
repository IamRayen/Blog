import { ADD_BLOG,GET_BLOG,GET_BLOGS,DELETE_BLOG,VERIFY_BLOG,EDIT_BLOG } from "../Constants/blogAcTy";

export const addBlog = (payload) => {
    return {
        type: ADD_BLOG,
        payload
    }
}
export const getBlog = () => {
    return {
        type: GET_BLOG,
    }
}
export const getBlogs = () => {
    return {
        type: GET_BLOGS,
        payload
    }
}
export const deleteBlog = (payload) => {
    return {
        type: DELETE_BLOG,
        payload
    }
}
export const editBlog = (payload) => {
    return {
        type: EDIT_BLOG,
        payload
    }
}
export const verifyBlog = (payload) => {
    return {
        type: VERIFY_BLOG,
        payload
    }
}