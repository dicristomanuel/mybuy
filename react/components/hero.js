import React, { PropTypes, Component } from 'react';

class Hero extends Component {
  componentDidMount() {
    this.refs.hero.style.backgroundImage = `url('/assets/images/${this.props.category}-hero.jpg')`
  }

  capitalize(name) {
    if (name === 'FoodAndBeverage')
      return 'Food & Beverage'
    else if (name === 'HomeAndGarden')
      return 'Home & Garden'
    else if (name === 'BabyAndKids')
      return 'Baby & Kids'
    else
      return name.charAt(0).toUpperCase() + name.slice(1);
  }

    render() {
      const category = this.props.category;
      return(
        <div className='hero' ref={'hero'}>
          <div className='dark-layout'></div>
          <p className='hero-title'> {this.capitalize(category)} </p>
        </div>
      )
    }
}
// <div className='hero-title'>
// <p> {`Great! You selected ${category}`} </p>
// </div>

export default Hero;
