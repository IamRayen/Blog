import axios from "axios";
import { SIGNUP_FL,SIGNUP_REQ,SIGNUP_SUC } from "../Constants/SignUpC";

export const signup = (payload) =>async(dispatch) => {
    try {
        dispatch({type: SIGNUP_REQ})
        const {data} = await axios.post("http://localhost:4000/signup",payload) 
        if (JSON.stringify(data.token)) {
            localStorage.setItem("auth", JSON.stringify(data))
            dispatch({ type: SIGNUP_SUC, data })
            window.location.reload()
        } else {
            dispatch({ type: SIGNUP_FL, data });
        }       
    } catch (error) {
        console.log(error.message)
    }
}