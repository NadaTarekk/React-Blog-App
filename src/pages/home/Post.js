import { useNavigate } from "react-router-dom"


function Post({post}) {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/post/${post.id}`)

    }
  return (
    <>
        <h2 onClick={handleClick}>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
      
    </>
  )
}

export default Post
