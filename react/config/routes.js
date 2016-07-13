import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CategoriesList from '../components/categoriesList';
import BrandsList from '../components/brandsList';

export default (
    <Route path='/'>
      <IndexRoute component={CategoriesList} />
      <Route path='/brands-list/:category' component={BrandsList} />
    </Route>
)
