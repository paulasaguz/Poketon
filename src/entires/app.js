import React, {Fragment} from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from '../pages/components/header'
import PageHome from '../pages/containers/page-home';
import PagePokemon from '../pages/containers/page-pokemon';
import Favorites from '../pages/components/favorites';
import PageList from '../pages/containers/page-list';

const homeContainer = document.getElementById('home-container');

render(
  <BrowserRouter>
    <Fragment>
      <Header/>
      <Route exact path="/" component={PageHome}/>
      <Route exact path="/pokemon/:id" component={PagePokemon}/>
      <Route exact path="/lista" component={PageList}/>
      <Route exact path="/favoritos" component={Favorites}/>
    </Fragment>
  </BrowserRouter>
  , homeContainer);