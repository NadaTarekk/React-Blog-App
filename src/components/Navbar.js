import { Link } from "react-router-dom"



function Navbar({search, setSearch}) {
    return (
        <nav>
            <input 
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <ul>
                <li> <Link to ="/">Home</Link> </li>
                <li> <Link to ="/post">Post</Link> </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
