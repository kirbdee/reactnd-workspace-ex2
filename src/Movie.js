import React, { Component } from 'react';
import Likes from './Likes';

class Movie extends Component {
 	render = () => (
    	<div>
			<h2>{this.props.name}</h2>
			<Likes users={this.props.likes}/>
		</div>
    )
}

export default Movie;