import { CHANGE_THEME, LOGIN, LOGOUT, RECEIVE_REPO_LIST } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || {
    email: '',
    gitHubUser: '',
  },
  theme: localStorage.getItem('theme') || 'light',
  repoList: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      const theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      return { ...state, theme };

    case LOGIN:
      const { user } = action;
      localStorage.setItem('user', JSON.stringify(user));
      return { ...state, user };

    case LOGOUT:
      return INITIAL_STATE;

    case RECEIVE_REPO_LIST:
      const { repoList } = action;
      return { ...state, repoList: repoList };

    default:
      return state;
  }
}
