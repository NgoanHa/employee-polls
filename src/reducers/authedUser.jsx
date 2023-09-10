import { LOGOUT_AUTHENTICATION_USER, SET_AUTHENTICATION_USER } from "../actions/authedUser";

const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION_USER:
            return action.authedUser;
        case LOGOUT_AUTHENTICATION_USER:
            return null;
        default:
            return state;
    }
}
export default authedUser;