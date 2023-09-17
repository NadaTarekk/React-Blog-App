import { useParams } from "react-router-dom"


function PostDetail({posts}) {
    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id);
    
  return (
    <div>
         <p>{post.title}</p>
        <p>{post.datetime}</p>
        <p>{post.body}</p> 
        
      
    </div>
  )
}

export default PostDetail
