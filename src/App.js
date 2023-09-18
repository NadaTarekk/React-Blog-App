import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddPost from "./pages/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/home/PostDetail"
import { useEffect, useState } from "react";
import axios from "axios";
import EditPost from "./pages/home/EditPost";


function App() {
  const [posts, setPosts] = useState([])
  const [fetchError, setFetchError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const URI = 'http://localhost:3500/posts'


  useEffect(() => {

    const fetchPosts = async () => {
      
      try {
        const response = await axios.get(URI)
        setPosts(response.data)
        setFetchError(false)
      }
      catch (err) {
        setFetchError(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => fetchPosts(), 1500)
  }, [])
    

  //fix the search

  return (
    <div className="App">
      <Header />
      <Navbar 
      search={search}
      setSearch={setSearch}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home 
          posts={posts.filter(post=>(post.title).includes(search) || (post.body).includes(search))} 
          isLoading={isLoading} 
          fetchError={fetchError} />} />
          
          <Route path="/post" element={<AddPost 
          posts={posts}
          setPosts={setPosts}
          />} />
          <Route path="/post/:id" element={<PostDetail  
          posts={posts} 
          setPosts={setPosts}
          />} />
          <Route path="/edit/:id" element={< EditPost 
          posts={posts} 
          setPosts={setPosts}
           />}/>
           <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
