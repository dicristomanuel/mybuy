import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Locator from './locator';



class BrandsList extends Component {
  componentWillMount() {
    // get brands to display for > this.props.params.category <
  }

  render() {
    return(
      <div className='brands-container'>
        <Header />
          <Hero category={this.props.params.category}/>
          <Locator stage={2}/>
          <p className='brand-subtitle'>{`Next let's pick some of your preferred stores.`}</p>
          <div className='brandlist'>
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
            <div className='button'>
              next &gt;
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default BrandsList;
