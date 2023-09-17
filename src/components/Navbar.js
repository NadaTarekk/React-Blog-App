import { Link } from "react-router-dom"



function Navbar() {
    return (
        <nav>
            <input type="text" />
            <ul>
                <li> <Link to ="/">Home</Link> </li>
                <li> <Link to ="/post">Post</Link> </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
