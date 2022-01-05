import { createStore,combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { signupReducer } from "./Reducers/SignUpR"
import { loginReducer } from "./Reducers/LogInR"

const reducer = combineReducers({
    signupReducer,
    loginReducer
})

const Token = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null 

const initialState = {
    Token:  Token
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store