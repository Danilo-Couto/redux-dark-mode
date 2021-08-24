const getUserRepositories = async (gitHubUser) => {
  const url = `https://api.github.com/users/${gitHubUser}/repos`;
  const response = await fetch(url);
  const json = await response.json();
  return json.map(repo => repo.name);
}

export default getUserRepositories;
