import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState } from 'react';
import { hanldeLoginProcess } from '../actions/authedUser';
import '../style/common.css'

const Login = ({dispatch, logInState}) => {

    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("sarahedo123");

    if(logInState){
        return <Navigate to="/"/>;
    }

    const handleSetUsername = (e) => {
        const usernameValue = e.target.value;
        setUsername(usernameValue);
    };

    const handleSetPassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(hanldeLoginProcess(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className="login-container">
            <h1>Log In</h1>
            <form className="login-container-form" onSubmit={handleFormSubmit}>
                <div className="login-container-username">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" data-testid="username" value={username} onChange={handleSetUsername}/>
                </div>
                <div className="login-container-password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" data-testid="password" value={password} onChange={handleSetPassword}/>
                </div>
                <div>
                    <button data-testid="submit" type="submit" className="login-container-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({
    logInState: !!authedUser,
});
export default connect(mapStateToProps)(Login);