const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
  loanType: { type: String },
  loanAmount: { type: Number },
  status: { type: String, default: 'pending' },
  appliedAt: { type: Date, default: Date.now },
  dueDate: { type: Date }
})

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  occupation: { type: String },
  ctc: { type: Number },
  status: { type: String, default: 'new' },
  loans: [loanSchema],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Customer', customerSchema)