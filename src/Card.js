import React from 'react';
import axios from 'axios';

class Card extends React.Component {
	state = {
		user: null
	};

	componentDidMount = async () => {
		const r = await axios.get('https://jsonplaceholder.typicode.com/users/3');
		
		if (r.status === 200) {
			this.setState({
				user: r.data
			}, () => {
				console.log(this.state.user);
			});
		}
	}

	render() {
		return this.props.children(this.state.user);
	}
};

export default Card;