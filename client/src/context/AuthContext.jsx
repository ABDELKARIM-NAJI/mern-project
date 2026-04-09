import { createContext, useState, useContext, useEffect } from 'react'
import authService from '../services/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    const token = authService.getToken()
    if (currentUser && token) {
      setUser(currentUser)
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const signup = async (username, email, password, passwordConfirm) => {
    const result = await authService.signup(username, email, password, passwordConfirm)
    setUser(result.user)
    setIsAuthenticated(true)
    return result
  }

  const signin = async (email, password) => {
    const result = await authService.signin(email, password)
    setUser(result.user)
    setIsAuthenticated(true)
    return result
  }

  const logout = () => {
    authService.logout()
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
