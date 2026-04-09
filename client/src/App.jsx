
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold">Welcome to MERN App</h1>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
