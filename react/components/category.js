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

    if (this.props.origin === 'afterPurchase') {
      if (this.refs.FoodAndBeverageGray)
        this.refs.FoodAndBeverageGray.className += ' gray-text'
    }
  }

  mouseOver(category) {
    if (this.props.origin !== 'afterPurchase') {
      if (category === 'FoodAndBeverage') {
        this.refs[category].className = 'image-hover food-and-beverage img-category';
      } else if (category === 'pets') {
        this.refs[category].className = 'image-hover big-pets img-category';
      } else {
        this.refs[category].className = 'image-hover img-category';
      }
    } else {
      if (category === 'pets') {
        this.refs[category].className = 'image-hover big-pets img-category';
      } else if (category !== 'FoodAndBeverage') {
        this.refs[category].className = 'image-hover img-category';
      }
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
    if (this.props.origin === 'afterPurchase') {
      if (this.props.name !== 'FoodAndBeverage') {
        this.refs[overlay].style.opacity = '.4'
      }
    } else {
      this.refs[overlay].style.opacity = '.4'
    }
  }

  overlayHoverOut(overlay) {
    if (this.props.origin === 'afterPurchase') {
      if (this.props.name !== 'FoodAndBeverage') {
        this.refs[overlay].style.opacity = '.7'
      }
    } else {
      this.refs[overlay].style.opacity = '.7'
    }
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
    const image = this.props.origin === 'afterPurchase' &&
                  name === 'FoodAndBeverage' ?
                  `/assets/images/FoodAndBeverageB&W.jpg` :
                  `/assets/images/${name}.jpg`
    return(
      <div className='category' onClick={ this.onClick.bind(this) } onMouseEnter={ this.mouseOver.bind(this, name) } onMouseLeave={ this.mouseLeave.bind(this, name) }>
        <div className='category-title' ref={`${name}Gray`}>{this.capitalize(name)}</div>
        <div className='overlay' onMouseEnter={this.overlayHover.bind(this, `overlay-${name}`)} onMouseLeave={this.overlayHoverOut.bind(this, `overlay-${name}`)} ref={`overlay-${name}`}></div>
        {}
        <img src={image} className='img-category' ref={name}/>
      </div>
    )
  }
}

export default Category;
