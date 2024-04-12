import React from 'react';
import {useState} from 'react'
import Post from './components/Post';
import './App.css'
import PostForm from './components/PostForm';
import Feed from './components/Feed';


function App() { const [posts, setPosts] = useState([]); //state to store posts

const addPost = (newPost) => {
  setPosts(([newPost, ...posts]));
}
  

  return (
    <div>
    <h1>Fakebook!</h1>
    
      {/* CreatePostForm */}
      <PostForm addPost={addPost}/>
      
      {/* Feed */}
      <Feed posts={posts}/>
      
      {/* Post*/}
      <Post content="This is a test post!" />
      <Post content="This is another test post!" />

    </div>

  )
}

export default App
