import React, { PropTypes, Component } from 'react';

class Footer extends Component {

    render() {
      return(
        <div className='footer'>
          <div className='footer-image-container'>
            <img src='/assets/images/footer.jpg' className='footer-img'></img>
          </div>
        </div>
      )
    }
}

export default Footer;
