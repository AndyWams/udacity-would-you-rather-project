import { SET_AUTH_USER } from "../../Actions/Auth";

const auth = (state = null, action) => {
  if (action.type === SET_AUTH_USER) {
    return action.id;
  }
  return state;
};

export default auth;
