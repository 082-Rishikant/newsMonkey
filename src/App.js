// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      progress: 0
    }
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  pageSize = 6;
  country = "in";
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
        </div>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
            <Route exact path="/business" element={<News  setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
            <Route exact path="/health" element={<News  setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
            <Route exact path="/science" element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<News  setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
