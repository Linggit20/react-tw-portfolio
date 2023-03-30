import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
       <main>
        <Hero />
        <About />
        <Project/>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App