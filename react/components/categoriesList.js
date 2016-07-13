import React, { PropTypes, Component } from 'react';
import FlipMove from 'react-flip-move';
import Category from './category';


class CategoriesList extends Component {
  mouseOver(category) {
    if (category === 'foodAndBeverage') {
      this.refs[category].className = 'image-hover food-and-beverage';
    } else {
      this.refs[category].className = 'image-hover';
    }
  }

  mouseLeave(category) {
    if (category === 'foodAndBeverage') {
      this.refs[category].className = 'food-and-beverage';
    } else {
      this.refs[category].className = '';
    }
  }

  categories() {
    return [
      {name: 'beauty', key: 1},
      {name: 'restaurants', key: 2},
      {name: 'pets', key: 3},
      {name: 'HomeAndGarden', key: 4},
      {name: 'FoodAndBeverage', key: 5},
      {name: 'BabyAndKids', key: 6}
    ];
  }


  render() {
    return(
      <FlipMove easing="cubic-bezier(.49,.05,.62,.9)" className='categories-container'>
        { this.categories().map(category => <Category name={category.name} key={category.key}/>) }
      </FlipMove>
    )
  }
}

// CategoriesList.PropTypes = {
//   giftcards: PropTypes.string.isRequired,
// }

export default CategoriesList;
