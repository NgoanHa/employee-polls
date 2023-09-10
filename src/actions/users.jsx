export const GET_USERS = "GET_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

export const addAnswerOfUser = (authedUser, id, answer) => {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qId: id,
        answer,
    }
}

export const addQuestionOfUser = (authedUser, id) => {
    return {
        type: ADD_QUESTION_USER,
        authedUser,
        qid: id,
    }   
}