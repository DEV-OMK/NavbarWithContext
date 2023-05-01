import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeBgTheme = isDarkTheme ? 'dark-home-bg' : 'light-home-bg'
      const homeColorTheme = isDarkTheme
        ? 'light-home-color'
        : 'dark-home-color'

      return (
        <>
          <Navbar />
          <div className={`home-bg-container ${homeBgTheme}`}>
            <img src={homeUrl} className="home-image" alt="home" />
            <h1 className={`home-title ${homeColorTheme}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
