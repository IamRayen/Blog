import { DELETE_FL,DELETE_REQ,DELETE_SUC } from "../Constants/DeleteUserC";
import axios from "axios";


export const DeleteUserA = () => async(dispatch) => {
        
    try {
        const jwt = localStorage.getItem("auth")
        dispatch({type:DELETE_REQ})
        const {data} = await axios.delete(`http://localhost:4000/user/${JSON.parse(jwt).userID}/delete`,{headers:{jwt:jwt}})
        console.log(data)
        if(data.message == "user deleted successfully"){
            dispatch({type:DELETE_SUC,data})
            localStorage.removeItem("auth")
            window.location.reload()
            console.log(data)
        }else{
            dispatch({type:DELETE_FL})
        }
    } catch (error) {
        console.log({error:error,message:"this is deleteUA"})
    }
}

