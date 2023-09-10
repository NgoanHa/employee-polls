import { GET_QUESTIONS, ADD_ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

const questions = (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.author)
                    }
                }
            }
        default:
            return state;
    }
}
export default questions;