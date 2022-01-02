import { DELETE_USER, GET_USER, GET_USERS, LOG_IN, LOG_OUT, SIGN_UP } from "../Constants/userAcTy";

export const logIn = (payload) => {
    return {
        type:LOG_IN,
        payload
    }
}
export const signUp = (payload) => {
    return {
        type:SIGN_UP,
        payload
    }
}
export const logOut = (payload) => {
    return {
        type:LOG_OUT,
        payload
    }
}
export const getUser = (payload) => {
    return {
        type:GET_USER,
        payload
    }
}
export const getUsers = (payload) => {
    return {
        type:GET_USERS,
        payload
    }
}
export const deleteUser = (payload) => {
    return {
        type:DELETE_USER,
        payload
    }
}