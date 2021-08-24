import { CHANGE_THEME, LOGIN, LOGOUT } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {
    email: '',
    githubUser: '',
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

    default:
      return state;
  }
}
