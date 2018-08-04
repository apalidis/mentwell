import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import TopicGroupList from './TopicGroupList';
// import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="homePage">
        <NavBar />
        <TopicGroupList />
      </div>
    );
  }
}

export default App;
