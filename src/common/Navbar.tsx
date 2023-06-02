import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/artwork">Browse</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </ul>
    </div>
  )
}