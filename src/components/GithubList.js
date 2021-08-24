import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionGetRepoList, actionLogout } from '../redux/actions'

export class GithubList extends Component {
  componentDidMount() {
    const { dispatchRepoList, gitHubUser, history } = this.props;
    if (gitHubUser) dispatchRepoList(gitHubUser);
    else {
      alert('Você precisa estar logado para acessar está página!');
      history.push('login');
    }
  }

  onLogout = () => {
    const { dispatchLogout, history} = this.props;
    dispatchLogout();
    history.push('/login');
  }
  render() {
    const { repoList } = this.props;
    return (
      <div>
        <button onClick={this.onLogout}>Logout</button>
        {repoList.map((repo, index) => (
          <h3 key={index}>{repo}</h3>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({repoList, user: { gitHubUser }}) => ({
  repoList, gitHubUser,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchRepoList: (gitHubUser) => dispatch(actionGetRepoList(gitHubUser)),
  dispatchLogout: () => dispatch(actionLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GithubList)
