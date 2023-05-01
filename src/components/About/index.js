import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutBgTheme = isDarkTheme ? 'dark-about-bg' : 'light-about-bg'
      const aboutColorTheme = isDarkTheme
        ? 'light-about-color'
        : 'dark-about-color'

      return (
        <>
          <Navbar />
          <div className={`about-bg-container ${aboutBgTheme}`}>
            <img src={aboutUrl} className="about-image" alt="about" />
            <h1 className={`about-title ${aboutColorTheme}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
