import { Link} from "react-router-dom"

function Post({post}) {
    //do i need to use isLoading here?

  return (
    <div className="post">
        <Link to={`/post/${post.id}`} > <h2>{post.title}</h2> </Link> 
        <p>{post.datetime}</p>
        <p>{post.body}</p>
      
    </div>
  )
}

export default Post
