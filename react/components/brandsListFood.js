import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';

class BrandsListFood extends Component {
  componentWillMount() {
    // get brands to display for > this.props.params.category <
  }

  toggleActive(product) {
    this.refs[product].className += ' active'
  }

  toBudget() {
    browserHistory.push(`/budget/${this.props.params.category}`);
  }

  render() {
    return(
      <div className='brands-container'>
        <Header />
          <Hero category={this.props.params.category}/>
          <Locator stage={3}/>
          <p className='brand-subtitle'>{`Next let's pick some of your preferred stores.`}</p>
          <div className='brandlist'>
            <div className='brand'>
              <img src='/assets/images/aldi-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/kroger-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/meijer-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/publix-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/safeway-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/starbucks-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/trader-joe-s-gift-card.png'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/whole-foods-gift-card.png'></img>
            </div>
          </div>
          <div className='buttons'>
            <div className='button'>
              &lt; Back
            </div>
            <div className='button-next' onClick={this.toBudget.bind(this)}>
              NEXT  &gt;
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default BrandsListFood;
