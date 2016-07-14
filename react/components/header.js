import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';


class Header extends Component {

  toHomepage() {
    browserHistory.push(`/`);
  }

    render() {
      return(
        <div className='header' onClick={this.toHomepage.bind(this)}>
          <div className='header-image-container'>
            <img src='/assets/images/header.jpg' className='header-img'></img>
          </div>
        </div>
      )
    }
}

export default Header;
