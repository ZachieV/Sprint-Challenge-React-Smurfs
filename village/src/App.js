import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const NavBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: steelblue;
	padding: 2rem;
	a {
		text-decoration: none;
		color: steelblue;
		background-color: #fff;
		font-size: 2rem;
		padding: 1rem 2rem;
		margin: 1rem;
		border-radius: 5px;
		transition: all 0.2s;
		&:hover {
			transform: scale(1.05);
		}
	}
	img {
		width: 150px;
		height: auto;
		background-color: white;
		padding: 5px;
		border-radius: 50px;
	}
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => this.setState({ smurfs: res.data }))
			.catch((err) => console.log('Fetch failed', err));
	}

	render() {
		return (
			<div className="App">
				{/* <SmurfForm />
				<Smurfs smurfs={this.state.smurfs} /> */}
				<NavBar>
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink to="/smurf-form">Add Smurf</NavLink>
				</NavBar>
				<Route path="/smurf-form" render={(props) => <SmurfForm {...props} />} />
				<Route exact path="/" render={(props) => <Smurfs smurfs={this.state.smurfs} {...props} />} />
			</div>
		);
	}
}

export default App;