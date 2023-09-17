import { useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function EditPost({ posts, setPosts }) {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate()
    const [editTitle, setEditTitle] = useState(post.title)
    const [editBody, setEditBody] = useState(post.body)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const editedPost = {title: editTitle, body: editBody }
        try {
            const response = await axios.patch(`http://localhost:3500/posts/${post.id}`,editedPost)
            const newPosts = posts.map(post=> (post.id).toString()===id? response.data : post)
            setPosts(newPosts)
            navigate('/')

        }
        catch (err) {
            console.log(err.message)

        }
    }

    return (
        <>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    id='title'
                    type='text'
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    required
                    placeholder="Add title"
                />
                <label htmlFor="post">Post:</label>
                <textarea
                    id='post'
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    required
                    placeholder="Add Body"
                />

                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default EditPost
