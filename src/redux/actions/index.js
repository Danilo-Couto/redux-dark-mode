import getUserRepositories from "../../service/githubAPI";
import { CHANGE_THEME, LOGIN, LOGOUT, RECEIVE_REPO_LIST, START_FETCHING_REPO } from "./actionTypes";

export const actionLogin = (email, gitHubUser) => ({
  type: LOGIN,
  user: { email, gitHubUser }
});

export const actionLogout = () => ({
  type: LOGOUT,
});

export const actionChangeTheme = () => ({
  type: CHANGE_THEME,
});

export const actionReceiveRepoList = (repoList) => ({
  type: RECEIVE_REPO_LIST,
  repoList,
});

export const actionStartFetchingRepo = () => ({
  type: START_FETCHING_REPO,
});

export const actionGetRepoList = (githubUser) => async (dispatch) => {
  dispatch(actionStartFetchingRepo());
  const repoList = await getUserRepositories(githubUser);
  dispatch(actionReceiveRepoList(repoList));
}
