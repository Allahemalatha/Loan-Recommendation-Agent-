const mongoose = require('mongoose')

const cibilSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  score: { type: Number, required: true },
  history: [
    {
      month: { type: String },
      score: { type: Number }
    }
  ],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Cibil', cibilSchema)