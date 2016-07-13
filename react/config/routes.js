import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CategoriesList from '../components/categoriesList';

export default (
    <Route path='/'>
      <IndexRoute component={CategoriesList} />
    </Route>
)

// <Route path='chat/:id' component={SingleChat} onEnter={SingleChat.onEnter} />
