import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Logo />
				{/* <ImageLinkForm />
				<FaceRecognizer /> */}
			</div>
		);
	}
}

export default App;
