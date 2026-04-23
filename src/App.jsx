import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CurvedDivider from './components/shared/CurvedDivider'

export default function App() {
  return (
    <main>
      <Hero />

      <About />

      <CurvedDivider toColor="#EDE6D8" />
      <Skills />
      <CurvedDivider toColor="#F5F0E8" flipped />

      <Experience />

      <CurvedDivider toColor="#EDE6D8" />
      <Certifications />
      <CurvedDivider toColor="#1A1A1A" />

      <Contact />
    </main>
  )
}
