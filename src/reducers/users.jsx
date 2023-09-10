import { ADD_ANSWER_USER, ADD_QUESTION_USER, GET_USERS } from '../actions/users';

export const users = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_ANSWER_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qId]: action.answer,
                    }
                }
            }
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat(action.qid),
                }
            }
        default:
            return state;
    }
}
export default users;