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
        <Footer />
      </div>
    )
  }
}

export default BrandsList;
