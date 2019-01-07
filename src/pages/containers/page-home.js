import React, { Component} from 'react';
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
      <Form handleSubmit={this.handleSubmit} setRef={this.setRef} />
    );
  }
}

export default Home;