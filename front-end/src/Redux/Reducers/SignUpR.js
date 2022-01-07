import {SIGNUP_FL,SIGNUP_REQ,SIGNUP_SUC} from "../Constants/SignUpC";


export const signupReducer = (state={},action) => {
    switch(action.type){
        case SIGNUP_REQ:
            return {loading:true}
        case SIGNUP_SUC:
            return {...state,loading:false,message:action.data.message}
        case SIGNUP_FL:
            return {...state,loading:false,message:action.data.message}
        default: 
            return state
    }
}