import {SIGNUP_FL,SIGNUP_REQ,SIGNUP_SUC} from "../Constants/SignUpC";


export const signupReducer = (state={},action) => {
    switch(action.type){
        case SIGNUP_REQ:
            return {loading:true}
        case SIGNUP_SUC:
            return {...state,loading:false}
        case SIGNUP_FL:
            return {...state,loading:false,error:"user already Exists!"}
        default: 
            return state
    }
}