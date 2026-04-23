import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsBanner from './components/StatsBanner'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsBanner />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
