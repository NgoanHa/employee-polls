import { connect } from "react-redux";
import PollCard from "./PollCard";
import { useState } from "react";

const Home = ({ authedUser, questions, users }) => {

    const sortedQuestions = Object.values(questions).sort((x, y) => y.timestamp - x.timestamp);
    const [isDisplay, setIsDisplay] = useState(true);

    const handleChangeType = (e) => {
        if (e.target.value === "unanswered") {
            setIsDisplay(true)
        } else {
            setIsDisplay(false)
        }
    }

    return (
        <div className="home-container">
            <div className="home-container-content">
                <div className="home-rdo-group">
                    <label>Unanswered</label>
                    <input type="radio" value="unanswered" checked={isDisplay} onChange={handleChangeType} />
                    <label>Answered</label>
                    <input type="radio" value="answered" checked={!isDisplay} onChange={handleChangeType} />
                </div>
                {isDisplay ? <div className="home-container-unanswered">
                    <div className="home-container-title">
                        <h2>New Questions</h2>
                    </div>
                    <hr />
                    {sortedQuestions
                        .filter((question) => (!question.optionOne.votes.includes(authedUser.id)
                            && !question.optionTwo.votes.includes(authedUser.id)))
                        .map((question) => (
                            <PollCard key={question.id} question={question} author={users[question.author]} />
                        ))}
                </div>
                    :
                    <div className="home-container-answered">
                        <div className="home-container-title">
                            <h2>Done</h2>
                        </div>
                        <hr />
                        {sortedQuestions
                            .filter((question) => (question.optionOne.votes.includes(authedUser.id)
                                || question.optionTwo.votes.includes(authedUser.id)))
                            .map((question) => (
                                <PollCard key={question.id} question={question} author={users[question.author]} />
                            ))}
                    </div>}
            </div>
        </div>
    );
}
const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: questions,
    users
});
export default connect(mapStateToProps)(Home);