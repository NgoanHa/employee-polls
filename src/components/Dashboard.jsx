import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

const Dashboard = ({ dispatch, authedUser, questions, users }) => {

    var questionId = useParams().id;
    const question = Object.values(questions).find((question) => question.id === questionId);
    const author = Object.values(users).find((user) => user.id === question.author);

    if (!authedUser || !question || !author) {
        return <Navigate to="/404" />;
    }

    const optionOneIsVoted = question.optionOne.votes.includes(authedUser.id);
    const optionTwoIsVoted = question.optionTwo.votes.includes(authedUser.id);
    const isVoted = optionOneIsVoted || optionTwoIsVoted;

    const handleSelectOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
    };

    const handleSelectOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
    };

    const calcPercent = (option, question) => {
        const totalVote = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / totalVote * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / totalVote * 100 + " %";
            default:
                return "";
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Poll by {author.id}</h1>
            <div>
                <img src={author.avatarURL} alt="Profile" />
            </div>
            <div>
                <h2>Would you rather?</h2>
            </div>
            <div className="dashboard-votes">
                <div className="dashboard-option">
                    <div className="dashboard-option-one">
                        <p>{question.optionOne.text}</p>
                    </div>
                    <button className="dashboard-votes-btn" onClick={handleSelectOptionOne} disabled={isVoted}>
                        <div>

                            {!isVoted &&
                                <p>Click</p>
                            }
                            {isVoted &&
                                <p>Votes: {question.optionOne.votes.length} ({calcPercent("optionOne", question)})</p>
                            }
                        </div>
                    </button>
                </div>
                <div className="dashboard-option">
                    <div className="dashboard-option-two">
                        <p >{question.optionTwo.text}</p>
                    </div>
                    <button className="dashboard-votes-btn" onClick={handleSelectOptionTwo} disabled={isVoted}>

                        {!isVoted &&
                            <p>Click</p>
                        }
                        {isVoted &&
                            <p>Votes: {question.optionTwo.votes.length} ({calcPercent("optionTwo", question)})</p>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
export default connect()(Dashboard);