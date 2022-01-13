import { USER_FL,USER_REQ,USER_SUC } from "../Constants/UserC";


export const userReducer = (state={},action) => {
    switch(action.type){
        case USER_REQ:
            return {loading:true}
        case USER_SUC:
            return {...state,loading:false,data:action.data}
        case USER_FL:
            return {...state,loading:false,error:action.error}
        default: 
            return state
    }
}