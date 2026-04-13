import { Link } from 'react-router-dom'
import { FaRocket, FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blur"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blur"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
          <FaRocket className="text-xl text-yellow-300" />
          <span className="text-white text-sm font-semibold">Welcome to Our Platform</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">Amazing</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Create, collaborate, and deploy your ideas with our powerful platform. Join thousands of developers building the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started
            <FaArrowRight className="text-lg" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-3 gap-8 justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">10k+</div>
            <p className="text-gray-200 mt-2">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">500+</div>
            <p className="text-gray-200 mt-2">Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">99%</div>
            <p className="text-gray-200 mt-2">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  )
}
