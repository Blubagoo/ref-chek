import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MainHead from './components/main-head';
import TopHead from './components/top-head';
import Nav from './components/nav';
import Table from './components/table';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='body'>
          <TopHead />
          <main role='main'>
            <MainHead />
            <div className='main'>
              <Nav />
              <Table />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
