import axios from "axios";
import { USER_REQ, USER_SUC, USER_FL } from "../Constants/UserC";
import { useSelector } from "react-redux";
import { useState } from "react";


export const UserA = () => async (dispatch) => {
    
    try {
        const jwt = localStorage.getItem("auth")
        console.log(jwt)
        dispatch({ type: USER_REQ });
        const response = await axios.get("http://localhost:4000/user/:userid",{headers:{jwt:jwt}});
        console.log(response.data)
        if (JSON.stringify(response.data)) {
            dispatch({ type: USER_SUC, data:response.data });
        } else {
            dispatch({ type: USER_FL,error:response.data });
        }
    } catch (error) {
        console.log(error.message);
    }
};
