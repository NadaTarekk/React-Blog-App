import { Link } from "react-router-dom"



function Navbar({search, setSearch}) {
    return (
        <nav className='nav'>
            <input 
            className="search"
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search posts"
            />
            <ul className="nav-link">
                <li className='nav-li'> <Link to ="/">Home</Link> </li>
                <li className='nav-li'> <Link to ="/post">Post</Link> </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
