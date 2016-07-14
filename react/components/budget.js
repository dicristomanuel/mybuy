import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';


class Budget extends Component {

  toResults() {
    browserHistory.push(`/results/${this.props.params.category}`);
  }

  render() {
    return(
      <div className='brands-container'>
        <Header />
          <Hero category={this.props.params.category}/>
          <Locator stage={3}/>
          <p className='brand-subtitle subtitle-budget'>{`Type in your desired budget below. This allows us to find the card or cards that best meet your budget, all while providing the highest discount available.`}</p>

          <div className='input-container'>
            <div className='input'>
              <div className='dollar-sign'>$</div>
              <input type="number" placeholder='150.00' className='digits'></input>
            </div>
          </div>

          <div className='buttons'>
            <div className='button'>
              &lt; Back
            </div>
            <div className='button-next' onClick={this.toResults.bind(this)}>
              NEXT &gt;
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Budget;
