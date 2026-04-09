import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/signin')
  }

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MERN App</div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm">Welcome, {user?.username}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="space-x-4">
              <a href="/signin" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                Sign In
              </a>
              <a href="/signup" className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
