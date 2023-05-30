import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/artwork">Browse</Link>
        <Link to="/favorites">Favorites</Link>
      </ul>
    </div>
  )
}