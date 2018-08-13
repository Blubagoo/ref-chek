import React from 'react';

import './top-head.css';

export default function TopHead(props) {
	console.log('tophead props', props);
	return (
		<header id='top-header'>
      <h1
      	onClick={ () => {
      		console.log('running on click');
      		props.onClick('UNSELECTED');
      	}}
      >REF-CHEK</h1>
     </header>
		)
}
