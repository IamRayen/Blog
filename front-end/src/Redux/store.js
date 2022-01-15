import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { signupReducer } from "./Reducers/SignUpR";
import { loginReducer } from "./Reducers/LogInR";
import { deleteUserR } from "./Reducers/DeleteUserR";
import { userReducer } from "./Reducers/UserR";

const creds = (state = null, action) => {
    switch (action.type) {
        case "TOKEN":
            return action.payload;
        default:
            return state;
    }
};

const reducer = combineReducers({
    signupReducer,
    loginReducer,
    creds,
    userReducer,
    deleteUserR
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.getItem("auth")) {
    store.dispatch({
        type: "TOKEN",
        payload: JSON.parse(localStorage.getItem("auth")),
    });
}

export default store;
