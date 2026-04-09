import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class AuthService {
  async signup(username, email, password, passwordConfirm) {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        username,
        email,
        password,
        passwordConfirm
      })
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Signup failed' }
    }
  }

  async signin(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, {
        email,
        password
      })
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Signin failed' }
    }
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }
}

export default new AuthService()
