export const SET_AUTHENTICATION_USER = "SET_AUTHENTICATION_USER";
export const LOGOUT_AUTHENTICATION_USER = "LOGOUT_AUTHENTICATION_USER";

export const setAuthenticationUser = (authedUser) => {
    return {
        type: SET_AUTHENTICATION_USER,
        authedUser
    }
}

export const logoutAuthenticationUser = () => {
    return {
        type: LOGOUT_AUTHENTICATION_USER
    }
}

export const hanldeLoginProcess = (username, password) => {
    return (dispatch, getState) => {
        const { users } = getState();
        const user = Object.values(users).find((user) => user.id === username && user.password === password);
        if(!!user){
            return dispatch(setAuthenticationUser(user));
        }
    }
}

export const handleLogoutProcess = () => {
    return (dispatch) => {
        return dispatch(logoutAuthenticationUser());
    };
}