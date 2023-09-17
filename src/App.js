import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddPost from "./pages/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/home/PostDetail"
import { useEffect, useState } from "react";
import axios from "axios";




function App() {
  const [posts, setPosts] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const URI = ' http://localhost:3500/posts'

  useEffect(()=>{
    console.log('app')
  },[])


  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await axios.get(URI)
        setPosts(response.data)
        setFetchError(null)
      }
      catch (err) {
        setFetchError(err.message)
      }
      finally {
        setIsLoading(false)

      }
    }
    setTimeout(()=>fetchPosts(),1500)
  }, [])

  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts} isLoading={isLoading} fetchError={fetchError} />} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/post" element={<AddPost />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
