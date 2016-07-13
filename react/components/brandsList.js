import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';


class BrandsList extends Component {
  componentWillMount() {
    // get brands to display for > this.props.params.category <
  }

  render() {
    return(
      <div className='brands-container'>
        <Header />

        <Footer />
      </div>
    )
  }
}

export default BrandsList;
