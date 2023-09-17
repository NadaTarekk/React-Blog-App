import { Link } from "react-router-dom"



function Navbar({search, setSearch}) {
    return (
        <nav class='nav'>
            <input 
            class="search"
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search posts"
            />
            <ul class="nav-link">
                <li> <Link to ="/">Home</Link> </li>
                <li> <Link to ="/post">Post</Link> </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
