import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faAddressCard, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    { name: 'Home', icon: faHome, link: '/' },
    { name: 'About', icon: faAddressCard, link: '/' },
    { name: 'Projects', icon: faFolderOpen, link: '/' },
    { name: 'Contact', icon: faEnvelope, link: '/' },
  ]

  const navLinks = document.querySelectorAll('.nav-link')
  if (nav) {
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('visible')
      }, (index + 1) * 100)
    })
  } else {
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.remove('visible')
      }, (navLinks.length - index) * 100)
    })
  }

  const handleNavClick = (e) => {
    e.preventDefault()
    setNav(!nav)
  }

  return (
    <nav>
      <div className='fixed top-0 left-0 right-0 z-50 p-5'>
        <div className='flex justify-end max-w-[1280px] min-w-[280px] m-auto relative'>
          <button onClick={handleNavClick} className='hover-effect focus-effect w-10 h-10 text-2xl text-indigo-500 bg-white shadow shadow-gray-400 rounded-md'>
            <FontAwesomeIcon icon={nav ? faTimes : faBars} />
          </button>
          <ul className='nav-item absolute right-0 top-full'>
          {links.map((link) => 
            <li key={link.name} className={`flex items-center justify-end mt-4 ${nav ? 'visible' : ''}`}>
              <a href={link.link} className='nav-link focus-effect flex items-center justify-end w-full text-indigo-500 rounded-md pl-2' onClick={handleNavClick}>
                <span className='mr-3 font-medium'>{link.name}</span>
                <FontAwesomeIcon icon={link.icon} className='hover-effect-2 w-6 h-6 p-2 bg-white rounded-md shadow-md shadow-gray-400'/>
              </a>
            </li>
          )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar