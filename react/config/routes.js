import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CategoriesList from '../components/categoriesList';
import CategoriesListAfter from '../components/categoriesListAfter';
import BrandsListPets from '../components/brandsListPets';
import BrandsListFood from '../components/brandsListFood';
import Budget from '../components/budget';
import Results from '../components/results';

export default (
    <Route path='/'>
      <IndexRoute component={CategoriesList} />
      <Route path='/brands-list/pets/:category' component={BrandsListPets} />
      <Route path='/brands-list/:category' component={BrandsListFood} />
      <Route path='/budget/:category' component={Budget} />
      <Route path='/results/:category' component={Results} />
      <Route path='/categories' component={CategoriesListAfter} />
    </Route>
)
