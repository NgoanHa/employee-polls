import { connect } from 'react-redux';
import '../style/common.css'

const LeaderBoard = ({ users }) => {

    const sortedListUser = Object.values(users).sort((x, y) => (Object.keys(y.answers).length + y.questions.length) - (Object.keys(x.answers).length + x.questions.length));

    return (
        <div className="leaderboard-container">
            <h1>Leader Board</h1>
            <table className="leaderboard-container-tbl" border="1">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedListUser.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div>
                                    <div>
                                        <img id="leaderboard-user-img" src={user.avatarURL} alt="UserImage" />
                                    </div>
                                    <div>
                                        <b><span>{user.name}</span></b><br />{user.id}
                                    </div>
                                </div>
                            </td>
                            <td>{Object.keys(user.answers).length}</td>
                            <td>{user.questions.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
const mapStateToProps = ({ users }) => ({
    users: users
});
export default connect(mapStateToProps)(LeaderBoard);