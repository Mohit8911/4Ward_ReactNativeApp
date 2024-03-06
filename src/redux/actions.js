import { login, logout } from "./slice";
import { store } from "./store";

const { dispatch } = store;

export default {
  login: () => dispatch(login(true)),
  logout: () => dispatch(logout(false)),
};
