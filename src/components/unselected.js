import React from 'react';

import './unselected.css';

export default function Unselected(props) {
	console.log('unselected props', props);
	return (
		<div className='unselected'>
			<div className='nav-card'>
        <p className='header'>Moderator Dashboard</p>
      </div>
      <div className='nav-card'>
        <p className='header'>Reference Check</p>
      </div>
      <div className='nav-card'>
        <p className='header'>Deck Builder</p>
      </div>
      <div className='nav-card'>
        <p className='header'>Seach</p>
      </div>
      <div className='nav-card'>
        <p className='header'>Feedback</p>
      </div>
		</div>
	);
}

