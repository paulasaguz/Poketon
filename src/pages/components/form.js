import React, { Component } from 'react';
import './form.css'

function Form ({ handleSubmit, setRef }){
  return(
    <form onSubmit={handleSubmit} ref={setRef}>
      <input className="search" placeholder="Busca tu pokemon" name="id"/>
    </form>
  )
}

export default Form