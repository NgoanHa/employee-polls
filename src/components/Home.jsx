import { connect } from "react-redux";
import PollCard from "./PollCard";

const Home = ({ authedUser, questions, users }) => {

    const sortedQuestions = Object.values(questions).sort((x, y) => y.timestamp - x.timestamp);

    return (
        <div className="home-container">
            <div className="home-container-content">
                <div className="home-container-unanswered">
                    <div className="home-container-title">
                        <h2>New Questions</h2>
                    </div>
                    <hr/>
                    {sortedQuestions
                        .filter((question) => (!question.optionOne.votes.includes(authedUser.id)
                            && !question.optionTwo.votes.includes(authedUser.id)))
                        .map((question) => (
                            <PollCard key={question.id} question={question} author={users[question.author]} />
                        ))}
                </div>
                <div className="home-container-answered">
                    <div className="home-container-title">
                        <h2>Done</h2>
                    </div>
                    <hr/>
                    {sortedQuestions
                        .filter((question) => (question.optionOne.votes.includes(authedUser.id)
                            || question.optionTwo.votes.includes(authedUser.id)))
                        .map((question) => (
                            <PollCard key={question.id} question={question} author={users[question.author]} />
                        ))}
                </div>
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