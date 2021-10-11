import { saveQuestionAnswer } from "../Utils/Api";
import { addAnswerToQuestion } from "../Actions/Questions";

export const GET_USERS = "GET_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const addQuestionToUser = ({ id, author }) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
};
const addAnswerToUser = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
};

export const handleSaveQuestionAnswer = (authUser, qid, answer) => {
  return async (dispatch) => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    try {
      return saveQuestionAnswer(authUser, qid, answer);
    } catch (e) {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    }
  };
};
