import { CHANGE_THEME, LOGIN, LOGOUT } from "./actionTypes";

export const actionLogin = (email, githubUser) => ({
  type: LOGIN,
  user: { email, githubUser }
});

export const actionLogout = () => ({
  type: LOGOUT,
});

export const actionChangeTheme = () => ({
  type: CHANGE_THEME,
});
