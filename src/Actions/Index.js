import { getInitialData } from "../Utils/Api";
import { receiveQuestions } from "../Actions/Questions";
import { getUsers } from "../Actions/Users";

export const handleInitialData = () => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveQuestions(questions));
    dispatch(getUsers(users));
  };
};
