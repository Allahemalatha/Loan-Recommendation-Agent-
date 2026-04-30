const dns = require('dns')
dns.setDefaultResultOrder('ipv4first')
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1'])

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const MONGO_URI = "mongodb+srv://allahema9949_db_user:Loan123456@hema.gzwdvuu.mongodb.net/loanagent?retryWrites=true&w=majority&appName=Hema"

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('MongoDB error:', err))

const customerRoutes = require('./src/routes/customers')
app.use('/api/customers', customerRoutes)

const cibilRoutes = require('./src/routes/cibil')
app.use('/api/cibil', cibilRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Loan Agent Backend is running!' })
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})