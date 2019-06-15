import React from 'react';
import styled from 'styled-components';

const StyledSmurf = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem auto;
	width: 40%;
	font-size: 2rem;
	background-color: steelblue;
	border-radius: 5px;
	color: #fff;
`;

const Smurf = (props) => {
	return (
		<StyledSmurf>
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
		</StyledSmurf>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};

export default Smurf;