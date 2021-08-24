import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionLogin } from '../redux/actions'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      gitHubUser: '',
    }
  }

  onSubmit = (e) => {
    const { email, gitHubUser } = this.state;
    const { dispatchLogin } = this.props;
    e.preventDefault();
    dispatchLogin(email, gitHubUser);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="email">
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            onChange={this.onChange} />
        </label>
        <label htmlFor="gitHubUser">
          <input 
            type="text" 
            name="gitHubUser" 
            id="gitHubUser" 
            placeholder="Git User" 
            onChange={this.onChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email, gitHubUser) => dispatch(actionLogin(email, gitHubUser)),
})

export default connect(null, mapDispatchToProps)(Login)
