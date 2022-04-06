import NavBarStyles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={NavBarStyles.container}>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/blog">Blog</Link>
    </nav>
  )

}

export default NavBar