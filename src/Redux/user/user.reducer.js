import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

//If state is ever undefined, it will always set it back to initial state value
const userReducer = (state = INITIAL_STATE, action) => {
switch (action.type){
case userActionTypes.SET_CURRENT_USER:
    return{
        ...state,
        currentUser: action.payload
    }
default:
    return state;
}
}

export default userReducer;