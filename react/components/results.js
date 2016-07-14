import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';

class Results extends Component {

  toggleCheckout() {
    this.refs.modal.className = this.refs.modal.className.includes('show') ? 'checkout hide' : 'checkout show';
  }

  render() {
    return(
      <div className='results-container'>
        <Header />
          <Hero category={this.props.params.category} />
          <Locator stage={3}/>
          <p className='brand-subtitle subtitle-budget'>{`Based upon your selection and budget, here are your results.`}</p>

          <div className='container-results' onClick={this.toggleCheckout.bind(this)}>
            <img src='/assets/images/trader-joes-table.png' className='table'></img>
            <img src='/assets/images/whole-foods-table.png' className='table'></img>
          </div>

          <div className='checkout hide' ref='modal' onClick={this.toggleCheckout.bind(this)}>
            <img src='/assets/images/buy-now-modal.png'></img>
          </div>


          <div className='buttons'>
            <div className='button'>
              &lt; Back
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Results;
