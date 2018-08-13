import React from 'react';
import FacebookLogin from './facebooklogin'

export default class Landing extends React.Component {
	componentDidMount() {
		console.log('mounted');
	}
	render() {
		return (
			<div className='landing'>
				<div className='login-box'>

				</div>
				<div className='landing-box'>
					<p className='header'>MODERATING MADE EASY</p>
					<p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
				<div className='landing-box'>
					<p className='header'>DECK BUILDER</p>
					<p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
				<div className='landing-box'>
					<p className='header'>KNOW WHO YOU ARE TRADING WITH</p>
					<p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
				<div className='landing-btn'>
					<p>Click on one of any button below to login</p>
          <FacebookLogin onLogin={this.onFacebookLogin}>
            <button>Facebook</button>
          </FacebookLogin>
				</div>
			</div>
		)
	}
}
