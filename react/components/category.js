import React, { PropTypes, Component } from 'react';
import FlipMove from 'react-flip-move';
import { browserHistory } from 'react-router';

class Category extends Component {
  componentDidMount() {
    if (this.props.name === 'FoodAndBeverage')
      this.refs.FoodAndBeverage.className = 'food-and-beverage';
  }

  mouseOver(category) {
    if (category === 'FoodAndBeverage') {
      this.refs[category].className = 'image-hover food-and-beverage';
    } else {
      this.refs[category].className = 'image-hover';
    }
  }

  mouseLeave(category) {
    if (category === 'FoodAndBeverage') {
      this.refs[category].className = 'food-and-beverage';
    } else {
      this.refs[category].className = '';
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
    browserHistory.push(`/brands-list/${this.props.name}`);
  }

  render() {
    const name = this.props.name
    return(
      <div className='category' onClick={ this.onClick.bind(this) } onMouseEnter={ this.mouseOver.bind(this, name) } onMouseLeave={ this.mouseLeave.bind(this, name) }>
        <div className='category-title'>{this.capitalize(name)}</div>
        <div className='overlay'></div>
        <img src={`/assets/images/${name}.jpg`} ref={name}/>
      </div>
    )
  }
}


export default Category;
