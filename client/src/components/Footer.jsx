import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Platform</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative solutions to help you grow your business and reach your goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <FaPhone className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <FaEnvelope className="text-blue-400" />
                <span>info@platform.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5" />
                <span>123 Tech Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Our Platform. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
