import { Link } from 'react-router-dom';
import '../style/common.css'
import { handleLogoutProcess } from '../actions/authedUser';
import { connect } from 'react-redux';

const Navigation = ({dispatch, authedUserId, userImage}) => {
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(handleLogoutProcess());
    };

    return (
        <div>
            <nav className="nav-block">
                <div className="top-nav">
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/add">New</Link>
                </div>
                <div className="user-block">
                    <img src={userImage} alt='UserImage'/>
                    <span>{authedUserId}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </div>
    );
}
const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
    userImage: authedUser.avatarURL
});
export default connect(mapStateToProps)(Navigation);