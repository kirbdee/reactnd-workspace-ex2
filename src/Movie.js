import React, { Component } from 'react'

class Movie extends Component {
 	render = () => (
    	<div>
      		<h2>{this.props.movie}</h2>
      	</div>
    )
}

export default Movie;