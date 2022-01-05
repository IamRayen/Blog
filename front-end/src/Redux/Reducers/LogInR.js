import { LOGIN_FL,LOGIN_REQ,LOGIN_SUC } from "../Constants/LogInC";


export const loginReducer = (state={},action) => {
    switch(action.type){
        case LOGIN_REQ:
            return {loading:true}
        case LOGIN_SUC:
            return {...state,loading:false}
        case LOGIN_FL:
            return {...state,loading:false,error:"user already Exists!"}
        default: 
            return state
    }
}