import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function AddPost({posts, setPosts}) {
  const navigate = useNavigate()
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const newPost= {title: newTitle, body: newBody, datetime:"2023" }
    const newPosts=[...posts, newPost]
    setPosts(newPosts)
    try{
    const response = await axios.post('http://localhost:3500/posts', newPost)
    navigate('/')

    }
    catch(err){
      console.log(err)
    }

 }

  return (
    <>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id='title'
          type='text'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
          placeholder="Add title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id='post'
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          required
          placeholder="Add Body"
        />

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default AddPost
