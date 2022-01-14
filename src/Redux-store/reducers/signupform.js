import { initialState } from "../index.js";

 function signupReducer(state=initialState.signup,action){
    console.log(state,action)

    const {type,payload}= action
    switch(action.type){
        case"SHOW_SIGNUP_FORM":return{
                state,
                showForm:[state.showForm,payload]
        }
        case"HIDE_SIGNUP_FORM":return{
            state,
            showForm:[!state.showForm,payload]
    }
    default:
        return state;
    }
}
export default signupReducer
