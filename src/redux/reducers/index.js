import { CHANGE_THEME, LOGIN, LOGOUT, RECEIVE_REPO_LIST } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {
    email: '',
    gitHubUser: '',
  },
  theme: 'light',
  repoList: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'};

    case LOGIN:
      const { user } = action;
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
