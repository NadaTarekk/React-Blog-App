import { useParams } from "react-router-dom"


function PostDetail() {
    const {id} =useParams()
  return (
    <div>
        <p>{id}</p>
      
    </div>
  )
}

export default PostDetail
