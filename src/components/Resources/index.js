import React, { Component } from 'react';
import requireAuthHOC from '../requireAuthHOC'

class Resources extends Component {
  render(){
    return (
      <div>
        <h2>Resources</h2>
      </div>
    )
  }
}

export default requireAuthHOC(Resources);
