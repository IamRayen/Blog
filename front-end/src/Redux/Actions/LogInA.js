import axios from "axios";
import { LOGIN_FL,LOGIN_REQ,LOGIN_SUC } from "../Constants/LogInC";

export const login = (payload) =>async(dispatch) => {
    try {
        dispatch({type: LOGIN_REQ})
        const {data} = await axios.post("http://localhost:4000/login",payload) 
        localStorage.setItem("auth",JSON.stringify(data.token))
        dispatch({type:LOGIN_SUC})
    } catch (error) {
        dispatch({type:LOGIN_FL})
    }
}