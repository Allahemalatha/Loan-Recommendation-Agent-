const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

// GET all customers
router.get('/', async (req, res) => {
  const customers = await Customer.find()
  res.json(customers)
})

// POST - add a new customer
router.post('/', async (req, res) => {
  const customer = new Customer(req.body)
  await customer.save()
  res.json({ message: 'Customer saved!', customer })
})

// UPDATE a customer
router.put('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json({ message: 'Customer updated!', customer })
})

// DELETE a customer
router.delete('/:id', async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id)
  res.json({ message: 'Customer deleted!' })
})

// ADD a loan to a customer
router.post('/:id/loans', async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  customer.loans.push(req.body)
  await customer.save()
  res.json({ message: 'Loan added!', customer })
})

// UPDATE a loan status
router.put('/:id/loans/:loanId', async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  const loan = customer.loans.id(req.params.loanId)
  loan.status = req.body.status
  await customer.save()
  res.json({ message: 'Loan updated!', customer })
})

module.exports = router