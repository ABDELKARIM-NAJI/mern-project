const User = require('../models/User')
const jwt = require('jsonwebtoken')

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '7d'
  })
}

// @desc    Signup user
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { username, email, password, passwordConfirm } = req.body

    // Validation
    if (!username || !email || !password || !passwordConfirm) {
      return res.status(400).json({ message: 'Please provide all fields' })
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ message: 'Passwords do not match' })
    }

    // Check if user already exists
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password
    })

    // Create token
    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (err) {
    console.error('Signup error:', err)
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// @desc    Signin user
// @route   POST /api/auth/signin
// @access  Public
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' })
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Create token
    const token = generateToken(user._id)

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (err) {
    console.error('Signin error:', err)
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
exports.logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  })
}

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    res.status(200).json({
      success: true,
      user
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}
