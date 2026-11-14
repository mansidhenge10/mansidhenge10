import Navbar from "./components/navbar.jsx"
import Hero from "./sections/hero.jsx"
import About from "./sections/about.jsx"
import Skills from "./sections/skills.jsx"
import Projects from "./sections/projects.jsx"
import Contact from "./sections/contact.jsx"

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App