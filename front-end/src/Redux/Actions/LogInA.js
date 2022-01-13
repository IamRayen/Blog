import axios from "axios";
import { LOGIN_FL, LOGIN_REQ, LOGIN_SUC } from "../Constants/LogInC";

export const login = (payload) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQ });
        const { data } = await axios.post(
            "http://localhost:4000/login",
            payload
        )
        if (JSON.stringify(data.token)) {
            localStorage.setItem("auth", JSON.stringify(data))
            dispatch({ type: LOGIN_SUC, data })
            window.location.reload()
        } else {
            dispatch({ type: LOGIN_FL, data });
        }
    } catch (error) {
        console.log(error.message)
    }
};
