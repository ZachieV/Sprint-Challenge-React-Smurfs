import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.div`
	input {
		padding: 1rem;
		font-size: 2rem;
		margin: 2rem 1rem;
		border-radius: 5px;
		border: none;
		background-color: #eee;
		color: steelblue;
	}
	button {
		text-decoration: none;
		background-color: steelblue;
		color: #fff;
		font-size: 2rem;
		padding: 1rem 2rem;
		margin: 1rem;
		border-radius: 5px;
		transition: all 0.2s;
		&:hover {
			transform: scale(1.03);
			cursor: pointer;
		}
	}
`;

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	addSmurf = (event) => {
		event.preventDefault();
		// add code to create the smurf using the api
		axios.post('http://localhost:3333/smurfs', {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		});

		this.setState({
			name: '',
			age: '',
			height: ''
		});
		this.props.history.push('/');
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<StyledForm>
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit">Add to the village</button>
				</form>
			</StyledForm>
		);
	}
}

export default SmurfForm;