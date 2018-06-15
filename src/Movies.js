import React, { Component } from 'react'
import Movie from './Movie';

class Movies extends Component {
	render = () => (
      <div>
      	{Object.keys(this.props.movies).map((movieId) => (
         	<Movie 
         		key={movieId}
      			name={this.props.movies[movieId].movieName}
      			likes={this.props.movies[movieId].likes}
      		/>
         ))}
      </div>
	)
}

export default Movies;