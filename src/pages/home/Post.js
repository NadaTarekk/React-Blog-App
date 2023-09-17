import { Link} from "react-router-dom"

function Post({post}) {
    //do i need to use isLoading here?

  return (
    <>
        <Link to={`/post/${post.id}`} > <h2>{post.title}</h2> </Link> 
        <p>{post.datetime}</p>
        <p>{post.body}</p>
      
    </>
  )
}

export default Post
