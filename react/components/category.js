import React, { PropTypes, Component } from 'react';
import FlipMove from 'react-flip-move';
import { browserHistory } from 'react-router';

class Category extends Component {
  componentDidMount() {
    if (this.props.name === 'FoodAndBeverage')
      this.refs.FoodAndBeverage.className = 'food-and-beverage img-category';
    else if (this.props.name === 'pets') {
      console.log(this.refs.pets);
      this.refs.pets.className = 'big-pets img-category';
    }
  }

  mouseOver(category) {
    if (category === 'FoodAndBeverage') {
      this.refs[category].className = 'image-hover food-and-beverage img-category';
    } else if (category === 'pets') {
      this.refs[category].className = 'image-hover big-pets img-category';
    } else {
      this.refs[category].className = 'image-hover img-category';
    }
  }

  mouseLeave(category) {
    if (category === 'FoodAndBeverage') {
      this.refs[category].className = 'food-and-beverage img-category';
    } else if (category === 'pets') {
      this.refs[category].className = 'big-pets img-category';
    } else {
      this.refs[category].className = 'img-category';
    }
  }

  overlayHover(overlay) {
    this.refs[overlay].style.opacity = '.4'
  }

  overlayHoverOut(overlay) {
    this.refs[overlay].style.opacity = '.7'
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

  onClick() {
    if (this.props.name === 'pets')
      browserHistory.push(`/brands-list/pets/${this.props.name}`);
    else
      browserHistory.push(`/brands-list/${this.props.name}`);
  }

  render() {
    const name = this.props.name
    console.log(name);
    return(
      <div className='category' onClick={ this.onClick.bind(this) } onMouseEnter={ this.mouseOver.bind(this, name) } onMouseLeave={ this.mouseLeave.bind(this, name) }>
        <div className='category-title'>{this.capitalize(name)}</div>
        <div className='overlay' onMouseEnter={this.overlayHover.bind(this, `overlay-${name}`)} onMouseLeave={this.overlayHoverOut.bind(this, `overlay-${name}`)} ref={`overlay-${name}`}></div>
        <img src={`/assets/images/${name}.jpg`} className='img-category' ref={name}/>
      </div>
    )
  }
}


export default Category;
