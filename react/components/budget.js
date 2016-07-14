import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';

class Budget extends Component {

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
              <input type="number" className='digits'></input>
            </div>
          </div>

          <div className='buttons'>
            <div className='button'>
              &lt; Back
            </div>
            <div className='button-next'>
              NEXT  &gt;
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Budget;
