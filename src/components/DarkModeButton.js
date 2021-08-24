import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionChangeTheme } from '../redux/actions';

class DarkModeButton extends Component {
  render() {
    const { changeTheme, theme } = this.props;
    return (
      <div className="switchButton">
        <label className="switch">
          <input type="checkbox" onChange={changeTheme} checked={theme === 'dark'} />
          <span className="slider round" />
        </label>
      </div>
    );
  }
};

const mapStateToProps = ({theme}) => ({
  theme
})

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(actionChangeTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeButton);
