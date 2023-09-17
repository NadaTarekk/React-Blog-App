import Post from "./Post"

function Home({ posts, isLoading, fetchError }) {
    

    return (
        <>
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
        </>
    )
}

export default Home
