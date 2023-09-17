import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"



function PostDetail({ posts, setPosts }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3500/posts/${post.id}`)
            const postList = posts.filter(post => (post.id).toString() !== id);
            setPosts(postList)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
            <button onClick={handleDelete}>
                delete</button>


        </div>
    )
}

export default PostDetail
