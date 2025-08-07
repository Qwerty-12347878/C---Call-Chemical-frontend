import React, { useState, useEffect } from 'react'
import { Menu, X, Beaker, Palette, ShoppingCart } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <Beaker className="h-8 w-8 text-white" />
            <Palette className="h-6 w-6 text-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white">C - Call</span>
              <span className="text-xs text-white font-medium">Chemical & TILES</span>
            </div>
          </div>

          {/* Desktop Links + CTA + Cart */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg font-semibold transition-colors duration-200">
              Get Quote
            </button>
            <button
              onClick={() => setCartCount((count) => count + 1)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu + Cart */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setCartCount((count) => count + 1)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full mt-2 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg font-semibold transition-colors duration-200">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
