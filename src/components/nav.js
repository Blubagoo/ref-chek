import React from 'react';

import './nav.css';

export default function Nav(props) {
	console.log(props);
	return (
		<div className='nav'>
      <div className='btn mod-btn'>
        <p className='btn-text'>Moderator Dashboard</p>
      </div>
      <div className='btn ref-btn'>
        <p className='btn-text'>Reference Check</p>
      </div>
      <div className='btn deck-btn'>
        <p className='btn-text'>Deck Builder</p>
      </div>
      <div className='btn search-btn'>
        <p className='btn-text'>Search</p>
      </div>
      <div className='btn feedback-btn'>
        <p className='btn-text'>Feedback</p>
      </div>
    </div>
	)
}
