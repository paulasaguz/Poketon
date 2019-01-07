import React, { Component, Fragment } from 'react';
import Form from '../components/form';

class Home extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(this.form)
    this.id = form.get('id')
    this.props.history.push(`/pokemon/${this.id}`);
  }
  setRef = (element) => {
    this.form = element
  }
  render() { 
    return ( 
    <Fragment>
      <Form handleSubmit={this.handleSubmit} setRef={this.setRef} />
    </Fragment>
    );
  }
}

export default Home;