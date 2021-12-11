// import logo from './logo.svg';
import React from 'react'
import './App.css';

export default class App extends React.Component
{
  name="Rishi"
  render(){
    return(
      <>
        <h2>Hello {this.name}, This is my first Class based Component</h2>
      </>
    );
  }
}
