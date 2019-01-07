import React, {Fragment} from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../pages/components/header'
import PageHome from '../pages/containers/page-home';
import PagePokemon from '../pages/containers/page-pokemon';
import PageFavorites from '../pages/containers/page-favorites';
import PageList from '../pages/containers/page-list';
import reducer from '../reducers/index';
import { Switch } from 'react-router';

const store = createStore(reducer, {favorites:[]})

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
  <BrowserRouter>
      <Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={PageHome}/>
          <Route exact path="/pokemon/:id" component={PagePokemon}/>
          <Route exact path="/lista" component={PageList}/>
          <Route exact path="/favoritos" component={PageFavorites}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
  , homeContainer);