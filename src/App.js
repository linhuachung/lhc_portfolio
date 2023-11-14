import React, {useState} from 'react'
import {About, Footer, Header, Skills, Work} from './container'
import {Navbar} from './components'
import './App.scss'

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'))
  const handleGetTheme = (data) => {
    setTheme(data)
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar getTheme={handleGetTheme} />
      <Header />
      <About />
      <Work />
      <Skills />
      {/*<Testimonial />*/}
      <Footer />
    </div>
  )
}

export default App
