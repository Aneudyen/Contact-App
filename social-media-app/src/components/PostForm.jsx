import{useState} from 'react'

function PostForm({props}){
    const [title, setTitle]=useState('');
    const [content, setContent]=useState('');

    let handleSubmit = (event)=>{
        event.preventDefault();
        onPostCreated({title,content});
        setTitle('')
        setContent('')
    };

    return(
        <form onSubmit={handleSubmit}>
        <input class = 'title'
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create Post</button>
      </form> 
    );
}

export default PostForm