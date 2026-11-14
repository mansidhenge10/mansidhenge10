
import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          MANSI<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-5 flex flex-col gap-5 border-t border-white/10 pt-5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

    </nav>
  )
}

export default Navbar
