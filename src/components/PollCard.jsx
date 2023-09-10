import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../style/common.css'

const PollCard = ({ question }) => {
    return (
        <div className="poll-card-container">
                <p>{question.author}</p>
                <p>{new Date(question.timestamp).toDateString()}</p>
                <Link to={'questions/' + question.id}><button className="poll-card-btn">Show</button></Link>
        </div>
    );
}
export default connect()(PollCard);