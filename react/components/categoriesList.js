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
        <p className='title'>
          Leave the hard work to us -- we&rsquo;ll help you find the best deals available within your budget.
        </p>
        <p className='sub-title'>
          Start by selecting the category you want to shop.
        </p>

        <div className='locator'>


          <div className='stages'>
            <div className='stage'>
              CHOOSE CATEGORY
            </div>
            <div className='stage'>
              PICK BRANDS
            </div>
            <div className='stage'>
              ENTER BUDGET
            </div>
            <div className='stage'>
              VIEW RESULTS
            </div>
          </div>

          <div className='line'>
          </div>

          <div className='numbers'>
            <div className='dot'>
              1
            </div>
            <div className='dot'>
              2
            </div>
            <div className='dot'>
              3
            </div>
            <div className='dot'>
              4
            </div>
          </div>

        </div>

        <FlipMove easing="cubic-bezier(.49,.05,.62,.9)" className='categories-container'>
          { this.categories().map(category =>
            <Category name={category.name} key={category.key}/>)
          }
        </FlipMove>
      </div>
    )
  }
}

export default CategoriesList;
