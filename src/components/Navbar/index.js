import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgTheme = isDarkTheme ? 'dark-navbar-bg' : 'light-navbar-bg'
      const navbarColorTheme = isDarkTheme
        ? 'light-navbar-color'
        : 'dark-navbar-color'

      const onClickThemeChange = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar ${navbarBgTheme}`}>
          <img src={logoUrl} className="navbar-logo" alt="website logo" />
          <ul className="nav-item-container">
            <li className={`nav-item ${navbarColorTheme}`}>
              <Link to="/" className="link-item">
                Home
              </Link>
            </li>
            <li className={`nav-item ${navbarColorTheme}`}>
              <Link to="/about" className="link-item">
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="button"
            data-testid="theme"
            onClick={onClickThemeChange}
          >
            <img src={themeUrl} className="theme-image" alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
