import { saveQuestion, saveQuestionAnswer } from "../util/HandleServerData";
import { addQuestionOfUser, addAnswerOfUser } from "./users";

//Define constant type
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const addAnswerQuestion = (author, qid, answer) => {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return async (dispatch, getState) => {
        const { authedUser } = getState();
        return await saveQuestion(optionOneText, optionTwoText, authedUser.id).then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionOfUser(authedUser.id));
        })
    }
}

export const handleAddAnswer = (qid, answer) => {
    return async (dispatch, getState) => {
        const { authedUser } = getState();
        return await saveQuestionAnswer(authedUser.id, qid, answer).then(() => {
            dispatch(addAnswerQuestion(authedUser.id, qid, answer));
            dispatch(addAnswerOfUser(authedUser.id, qid, answer));
        });

    }
}