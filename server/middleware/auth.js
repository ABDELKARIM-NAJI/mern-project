const jwt = require('jsonwebtoken')

exports.protect = async (req, res, next) => {
  try {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({ message: 'Not authorized to access this route' })
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
      req.user = decoded
      next()
    } catch (err) {
      return res.status(401).json({ message: 'Not authorized to access this route' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}
