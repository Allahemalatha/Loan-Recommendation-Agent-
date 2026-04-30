const express = require('express')
const router = express.Router()
const Cibil = require('../models/Cibil')

router.get('/', async (req, res) => {
  const records = await Cibil.find()
  res.json(records)
})

router.post('/', async (req, res) => {
  const record = new Cibil(req.body)
  await record.save()
  res.json({ message: 'CIBIL score saved!', record })
})

router.get('/:phone', async (req, res) => {
  const record = await Cibil.findOne({ phone: req.params.phone })
  if (!record) return res.status(404).json({ message: 'Not found' })
  res.json(record)
})

module.exports = router