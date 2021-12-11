// import logo from './logo.svg';
import React from 'react'
import N from './components/Navbar.js'
import News from './components/News.js';

export default class App extends React.Component {
  name = "Rishi"
  render() {
    return (
      <>
        <N />
        <div className='container'>
          <News/>
        </div>
      </>

    );
  }
}
