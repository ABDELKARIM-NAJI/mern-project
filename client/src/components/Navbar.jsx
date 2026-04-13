import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/signin')
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            MERN App
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <FaUser className="text-blue-400" />
                  <span className="text-sm">{user?.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-medium"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-white"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 hover:bg-gray-700 rounded"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-700 mt-2 pt-4">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg mb-2">
                      <FaUser className="text-blue-400" />
                      <span className="text-sm">{user?.username}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-medium"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-center px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
