import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {LHCLogo} from '../../assets/lhc_logo'
import {MdLightMode} from 'react-icons/md'
import {CiDark} from 'react-icons/ci'

function Navbar({getTheme}) {
  const [toggle, setToggle] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme')
  )
  localStorage.setItem('theme', theme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    getTheme(theme)
  }, [theme])
  const handleModeTheme = (theme) => {
    setTheme(theme)
  }
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/*<img src={images.lhc_logo} alt='logo' />*/}
        <LHCLogo />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skill', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className='app__navbar-theme'>
        {theme === 'light' ?
          <button className='mode-theme' onClick={() => handleModeTheme('dark')}>
            <MdLightMode size={25} color={'#6b7688'} />

          </button> :
          <button className='mode-theme' onClick={() => handleModeTheme('light')}>
            <CiDark size={25} color={'#94A3B8'} />
          </button>}
      </div>
    </nav>
  )
}

export default Navbar
