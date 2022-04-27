import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// component
import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Recipes</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create a new recipe</Link>
            </nav>
        </div>
    )
}
