import React from 'react';

import './nav.css';

export default class Nav extends React.Component {
	render() {
    return (
      <div className='nav'>
        <div className='btn mod-btn' 
          onClick={() => {
            this.props.onClick('MOD_GROUP');
          }}
        >
          <p className='btn-text'>Moderator Dashboard</p>
        </div>
        <div className='btn ref-btn' 
          onClick={() => {
            console.log('running on click');
            this.props.onClick('REF_CHEK')
          }}
        >
          <p className='btn-text'>Reference Check</p>
        </div>
        <div className='btn deck-btn'
          onClick={() => {
            console.log('running on click');
            this.props.onClick('BUILD_DECK');
          }}
        >
          <p className='btn-text'>Deck Builder</p>
        </div>
        <div className='btn search-btn'
          onClick={() => {
            console.log('running on click');
            this.props.onClick('SEARCH');
          }}
        >
          <p className='btn-text'>Search</p>
        </div>
        <div className='btn feedback-btn'
          onClick={() => {
            console.log('running on click');
            this.props.onClick('FEEDBACK');
          }}
        >
          <p className='btn-text'>Feedback</p>
        </div>
      </div>
   )
  }
}
