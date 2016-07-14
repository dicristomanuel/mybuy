import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';


class BrandsListPets extends Component {
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
          <Locator stage={2}/>
          <p className='brand-subtitle'>{`Next let's pick some of your preferred stores.`}</p>
          <div className='brandlist'>
            <div className='brand' ref='petco'>
              <img src='/assets/images/petco.jpg'></img>
            </div>
            <div className='brand' ref='petsmart'>
              <img src='/assets/images/petsmart.jpg'></img>
            </div>
            <div className='brand' ref='petsupplies'>
              <img src='/assets/images/petsupplies.jpg'></img>
            </div>
            <div className='brand' ref='pupjoy'>
              <img src='/assets/images/pupjoy.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/ps.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/pet-extreme.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/petland.jpg'></img>
            </div>
            <div className='brand'>
              <img src='/assets/images/pet-valu.jpg'></img>
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

export default BrandsListPets;
