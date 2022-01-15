import { DELETE_FL,DELETE_REQ,DELETE_SUC } from "../Constants/DeleteUserC";

export const deleteUserR = (state={},action) => {
    switch(action.type){
        case DELETE_REQ:
            return {loading:true}
        case DELETE_SUC:
            return {...state,loading:false,message:action.data}
        case DELETE_FL:
            return {...state,loading:false,message:action.data.message}
        default: 
            return state
    }
}