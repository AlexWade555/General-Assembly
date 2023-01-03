import React, {Component} from 'react';

class Post extends Component {
  render () {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <h2>by {this.props.author}</h2>
        <p>{this.props.body}</p>
        <h3>Comments:</h3>
        <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}

export default Post
