import React, { Component } from 'react';
import { connect } from 'react-redux'
import Favorites from '../components/favorites'

class PageFavorites extends Component {
  render() { 
    return ( 
      <Favorites listFavorites={this.props.favoriteList} />
    );
  }
}

function mapStateToProps(state){
  return {
    favoriteList : state.favorites
  }
}
export default connect(mapStateToProps)(PageFavorites) ;