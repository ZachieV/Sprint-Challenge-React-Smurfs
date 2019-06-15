import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const StyledSmurfsContainer = styled.div`
	h1 {
		font-size: 3rem;
	}
`;

class Smurfs extends Component {
	render() {
		return (
			<StyledSmurfsContainer>
				<ul>
					{this.props.smurfs.map((smurf) => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
							/>
						);
					})}
				</ul>
			</StyledSmurfsContainer>
		);
	}
}

Smurf.defaultProps = {
	smurfs: []
};

export default Smurfs;