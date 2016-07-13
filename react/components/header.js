import React, { PropTypes, Component } from 'react';

class Header extends Component {

    render() {
      return(
        <div className='header'>
          <div className='header-image-container'>
            <img src='/assets/images/header.jpg' className='header-img'></img>
          </div>
        </div>
      )
    }
}

export default Header;
