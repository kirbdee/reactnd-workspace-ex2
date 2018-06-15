import React, { Component } from 'react';

class Likes extends Component {
	render = () => (
      	<div>
    		<p>Liked By:</p>
            <ul>
              {this.props.users.map((name) => (
                  <like key={name} name={name} />
              ))}
			</ul>
		</div>
    )
}

export default Likes;