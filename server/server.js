require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const app = express()
const port = process.env.PORT || 3000

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
  })

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
