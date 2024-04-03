import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'tomato' })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'tomato' })}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/books'
            style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'tomato' })}
          >
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
