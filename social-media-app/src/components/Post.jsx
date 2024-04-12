import react, {useState} from 'react';
import Comment from './Comment'
function Post(props){

    const[likes, setLikes]= useState(0);

    function handleLike(){
        setLikes(likes + 1);
    }
    return(
        <div>
        <h3>Test Post</h3>
        <p>This is a test post we'll edit later!</p>
        <p>Likes: 30</p>
        <button>Like</button>
        <p>Comments:</p>
        <Comment />
        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
        </div>
    )
}

export default Post