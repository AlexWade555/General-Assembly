import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';

var examplePost = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(
  <Post
  title={examplePost.title}
  author={examplePost.author}
  body={examplePost.body}
  comments={examplePost.comments}
  />,
  document.getElementById('root')
)
