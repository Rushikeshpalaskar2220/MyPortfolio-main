import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/skillls'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Experience from './Components/Experience'
import Certifications from './Components/Certifications'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <About />
     <Skills/>
     <Experience/>
     {/* <Projects/> */}
     <Certifications/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App