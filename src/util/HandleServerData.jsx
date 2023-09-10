import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA.js';

//Get initial data from file _DATA.js
export const getInitData = async () => {
    const [users, questions] = await Promise.all([
        _getUsers(),
        _getQuestions()
    ]);
    return ({
        users,
        questions
    });
}

// Handle save question to file _DATA.js
export const saveQuestion = (optionOneText, optionTwoText, author) => {
    return _saveQuestion({optionOneText, optionTwoText, author})
}

// Handle save answer of question to file _DATA.js
export const saveQuestionAnswer = (authedUser, qid, answer) => {
    return _saveQuestionAnswer({
        authedUser,
        qid,
        answer
    });
}