import axios from "axios";
import { USER_REQ, USER_SUC, USER_FL } from "../Constants/UserC";


export const UserA = () => async (dispatch) => {
    
    try {
        const jwt = localStorage.getItem("auth")
        dispatch({ type: USER_REQ });
        const response = await axios.get(`https://codenook.herokuapp.com/user/${JSON.parse(jwt).userID}`,{headers:{jwt:jwt}});
        if (response.data) {
            dispatch({ type: USER_SUC, data:response.data.data });
        } else {
            dispatch({ type: USER_FL,error:response.data });
        }
    } catch (error) {
        console.log(error.message);
    }
};
