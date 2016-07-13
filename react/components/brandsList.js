import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';

class BrandsList extends Component {
  componentWillMount() {
    // get brands to display for > this.props.params.category <
  }

  toggleActive(product) {
    this.refs[product].className += ' active'
  }

  render() {
    return(
      <div className='brands-container'>
        <Header />
          <Hero category={this.props.params.category}/>
          <Locator stage={2}/>
          <p className='brand-subtitle'>{`Next let's pick some of your preferred stores.`}</p>
          <div className='brandlist'>
            <div className='brand' ref='petco' onClick={this.toggleActive.bind(this, 'petco')}>
              <img src='/assets/images/petco.jpg'></img>
            </div>
            <div className='brand' ref='petsmart' onClick={this.toggleActive.bind(this, 'petsmart')}>
              <img src='/assets/images/petsmart.jpg'></img>
            </div>
            <div className='brand' ref='petsupplies' onClick={this.toggleActive.bind(this, 'petsupplies')}>
              <img src='/assets/images/petsupplies.jpg'></img>
            </div>
            <div className='brand' ref='pupjoy' onClick={this.toggleActive.bind(this, 'pupjoy')}>
              <img src='/assets/images/pupjoy.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/petco.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/petsmart.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/petsupplies.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/pupjoy.jpg'></img>
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

export default BrandsList;
