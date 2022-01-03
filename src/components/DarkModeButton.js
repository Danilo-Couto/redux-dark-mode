import React, { Component } from 'react';

class DarkModeButton extends Component {
  
  render() {
    return (
      <div className="switchButton">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round" />
        </label>
      </div>
    );
  }
};

export default DarkModeButton;
