import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionGetRepoList } from '../redux/actions'

export class GithubList extends Component {
  componentDidMount() {
    const { dispatchRepoList, githubUser } = this.props;
    dispatchRepoList(githubUser);
  }

  render() {
    const { repoList } = this.props;
    return (
      <div>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(GithubList)
