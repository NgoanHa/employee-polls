import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {

    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionValueChange = (e) => {
        const firstOptionValue = e.target.value;
        setFirstOption(firstOptionValue);
    };

    const handleSecondOptionValueChange = (e) => {
        const secondOptionValue = e.target.value;
        setSecondOption(secondOptionValue);
    };

    const handleSubmitAddQuestion = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    };

    return (
        <div className="newpoll-container">
            <h1>New Poll</h1>
            <h3>Create Your Own Poll</h3>
            <form className="newpoll-form" onSubmit={handleSubmitAddQuestion}>
                <label>First Option</label>
                <div className="newpoll-form-input">
                    <input type="text" data-testid="firstOption" placeholder="First Option" value={firstOption} onChange={handleFirstOptionValueChange} required/>
                </div>
                <label>Second Option</label>
                <div className="newpoll-form-input">
                    <input type="text" data-testid="secondOption" placeholder="Second Option" value={secondOption} onChange={handleSecondOptionValueChange} required/>
                </div>
                <button data-testid="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default connect()(NewPoll);