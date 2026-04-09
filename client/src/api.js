const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Request Error:', error)
    throw error
  }
}

export default API_URL
