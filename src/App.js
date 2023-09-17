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

  //add not found page 

  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts} isLoading={isLoading} fetchError={fetchError} />} />
          <Route path="/about" element={<h1>about</h1>} />
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
