import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgTheme = isDarkTheme
        ? 'dark-not-found-bg'
        : 'light-not-found-bg'

      const notFoundColorThemeTitle = isDarkTheme
        ? 'light-not-found-color-title'
        : 'dark-not-found-color-title'

      const notFoundColorThemeCaption = isDarkTheme
        ? 'light-not-found-color-caption'
        : 'dark-not-found-color-caption'

      return (
        <>
          <Navbar />
          <div className={`not-found-bg-container ${notFoundBgTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              className="not-found-image"
              alt="not found"
            />
            <h1 className={`not-found-title ${notFoundColorThemeTitle}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-caption ${notFoundColorThemeCaption}`}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
