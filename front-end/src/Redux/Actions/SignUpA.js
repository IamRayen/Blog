import axios from "axios";
import { SIGNUP_FL,SIGNUP_REQ,SIGNUP_SUC } from "../Constants/SignUpC";

export const signup = (payload) =>async(dispatch) => {
    try {
        dispatch({type: SIGNUP_REQ})
        const {data} = await axios.post("http://localhost:4000/signup",payload) 
        localStorage.setItem("auth",JSON.stringify(data.token))
        dispatch({type:SIGNUP_SUC})
    } catch (error) {
        dispatch({type:SIGNUP_FL})
    }
}