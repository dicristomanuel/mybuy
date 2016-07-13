import React, { PropTypes, Component } from 'react';
import FlipMove from 'react-flip-move';
import Category from './category';
import Header from './header';
import Footer from './footer';
import Locator from './locator';


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
      {name: 'BabyAndKids', key: 6},
      {name: 'beauty', key: 1},
      {name: 'FoodAndBeverage', key: 5},
      {name: 'HomeAndGarden', key: 4},
      {name: 'pets', key: 3},
      {name: 'restaurants', key: 2},
    ];
  }

  render() {
    return(
      <div>
        <Header />
          <p className='title'>
            Leave the hard work to us -- we&rsquo;ll help you find the best deals available within your budget.
          </p>
          <p className='sub-title'>
            Start by selecting the category you want to shop.
          </p>

        <Locator stage={1}/>

        <FlipMove easing="cubic-bezier(.49,.05,.62,.9)" className='categories-container'>
          { this.categories().map(category =>
            <Category name={category.name} key={category.key}/>)
          }
        </FlipMove>
        <Footer />
      </div>
    )
  }
}

export default CategoriesList;
