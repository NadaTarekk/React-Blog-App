import { useEffect } from "react"
import Post from "./Post"

function Home({ posts, isLoading, fetchError }) {
   // const reversedPosts = [...posts].reverse();
   
// add no posts
    return (
        <div className='posts'>
            {isLoading && <p>Loading posts</p>}
            {fetchError && !isLoading && <p>{`Error: ${fetchError}`}</p>}
            {!fetchError && !isLoading && 
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}

            </ul>}
        </div>
    )
}

export default Home
