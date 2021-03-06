/*global FB*/

import React from 'react';

export default class Landing extends React.Component {
	componentDidMount() {
	  window.fbAsyncInit = function() {
	  	console.log('synced before init');
	    FB.init({
	      appId: '1813842465324998',
	      cookie: true,
	      xfbml: true,
	      version: 'v2.1'
	    });
	    console.log('before get login status', FB)
	    FB.getLoginStatus(function (response) {
	    	console.log('getting status');
	      this.statusChangeCallback(response);
	    }.bind(this));
	  }.bind(this);

	  // Load the SDK asynchronously
	  (function (d, s, id) {
	  	console.log('grabbing sdk');
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
	    js = d.createElement(s); js.id = id;
	    js.src = '//connect.facebook.net/en_US/sdk.js';
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	}

	// Here we run a very simple test of the Graph API after login is
	// successful.  See statusChangeCallback() for when this call is made.
	testAPI() {
	  console.log('Welcome!  Fetching your information.... ');
	  FB.api('/me', function(response) {
	  console.log('Successful login for: ' + response.name);
	  document.getElementById('status').innerHTML =
	    'Thanks for logging in, ' + response.name + '!';
	  });
	}

	// This is called with the results from from FB.getLoginStatus().
	statusChangeCallback(response) {
	  console.log('statusChangeCallback');
	  console.log(response);
	  // The response object is returned with a status field that lets the
	  // app know the current login status of the person.
	  // Full docs on the response object can be found in the documentation
	  // for FB.getLoginStatus().
	  if (response.status === 'connected') {
	    // Logged into your app and Facebook.
	    this.testAPI();
	  } else if (response.status === 'not_authorized') {
	    // The person is logged into Facebook, but not your app.
	    document.getElementById('status').innerHTML = 'Please log ' +
	      'into this app.';
	  } else {
	    // The person is not logged into Facebook, so we're not sure if
	    // they are logged into this app or not.
	    document.getElementById('status').innerHTML = 'Please log ' +
	    'into Facebook.';
	  }
	}

	// This function is called when someone finishes with the Login
	// Button.  See the onlogin handler attached to it in the sample
	// code below.
	checkLoginState() {
	  FB.getLoginStatus(function(response) {
	    this.statusChangeCallback(response);
	  }.bind(this));
	}

	handleClick() {
	  FB.login(this.checkLoginState());
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
				<div className='landing-btn' align='center'>
					<p>Click on one of any button below to login</p>
				</div>
			</div>
		)
	}
}
