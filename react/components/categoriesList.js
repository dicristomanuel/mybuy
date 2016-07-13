import React, { PropTypes, Component } from 'react';

class CategoriesList extends Component {
  render() {
    return(
      <div className='main-container'>
        <div className='title'>
          Choose a category
        </div>
        <div className='categories-container'>
          <div className='column'>
            <div className='category'>
              <div className='overlay'></div>
              <img src='/assets/images/beauty.jpg'/>
            </div>
            <div className='category'>
              <div className='overlay'></div>
              <img src='/assets/images/baby_and_kids.jpg'/>
            </div>
          </div>
          <div className='column column-center'>
            <div className='category-big'>
              <div className='overlay'></div>
              <img src='/assets/images/food_and_beverage.jpg'/>
            </div>
            <div className='category-small'>
              <div className='overlay'></div>
              <img src='/assets/images/restaurants.jpg'/>
            </div>
          </div>
          <div className='column'>
            <div className='category'>
              <div className='overlay'></div>
              <img src='/assets/images/home_and_garden.jpg'/>
            </div>
            <div className='category'>
              <div className='overlay'></div>
              <img src='/assets/images/pets.jpg'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// CategoriesList.PropTypes = {
//   giftcards: PropTypes.string.isRequired,
// }

export default CategoriesList;


const vectors = [[700, 716], [14000, 6426]]
