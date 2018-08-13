import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import MainHead from './main-head';
import TopHead from './top-head';
import Nav from './nav';
import Table from './table';
import Landing from './landing';
import { changeTableView } from '../actions';

export class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('app props', props);
  }
  componentDidMount() {
    
  }
  changeTable(view) {
    console.log('dispatching new view', view)
    this.props.dispatch(changeTableView(view))
  }
  render() {
    console.log('this props', this.props)
    switch (this.props.view) {
      case 'INDEX':
        return (
          <Router>
            <div className='body'>
              <TopHead onClick={this.changeTable.bind(this)} />
              <main role='main'>
                <MainHead />
                <div className='main'>
                  <Nav
                    onClick={this.changeTable.bind(this)} />
                  <Table table={this.props.table}/>
                </div>
              </main>
            </div>
          </Router>
        );
      default:
        return (
          <Router>
            <div className='body'>
              <TopHead onClick={this.changeTable.bind(this)} />
              <main role='main'>
                <Landing />
              </main>
            </div>
          </Router>
        );
    }
  }
}

const mapStateToProps = state => ({
  view: state.view,
  table: state.table
})

export default connect(mapStateToProps)(App);

