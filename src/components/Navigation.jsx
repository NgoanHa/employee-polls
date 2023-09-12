import { Link } from 'react-router-dom';
import '../style/common.css'
import { handleLogoutProcess, hanldeLoginProcess } from '../actions/authedUser';
import { connect } from 'react-redux';
import { useState } from 'react';

const Navigation = ({ dispatch, userImage, users }) => {

    const [imgUrl, setImgUrl] = useState(userImage);
    const [activeColor, setActiveColor] = useState("#5fe4d4");

    const handleChangeUser = (e) => {
        e.preventDefault();
        if (e.target.value === "logout") {
            dispatch(handleLogoutProcess());
        } else {
            const user = Object.values(users).find((user) => user.id === e.target.value);
            setImgUrl(user.avatarURL);
            setActiveColor(user.voteStyle);
            dispatch(hanldeLoginProcess(user.id, user.password));
        }
    }

    return (
        <div>
            <nav className="nav-block">
                <div className="top-nav">
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/add">New</Link>
                </div>
                <div className="user-block">
                    <img src={imgUrl} alt='UserImage' />
                    <select style={{backgroundColor: activeColor}} id="user-dropdown" onChange={handleChangeUser}>
                            {Object.values(users).map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.id}
                                </option>))
                            }
                            <option value="logout">Logout</option>
                    </select>
                </div>
            </nav>
        </div>
    );
}
const mapStateToProps = ({ authedUser, users }) => ({
    userImage: authedUser.avatarURL,
    users
});
export default connect(mapStateToProps)(Navigation);