import { getInitData } from "../util/HandleServerData"
import { getQuestions } from "./questions"
import { getUsers } from "./users"

export const handleInitData = () => {
    return (dispatch) => {
        return getInitData().then(({users, questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        });     
    };
}