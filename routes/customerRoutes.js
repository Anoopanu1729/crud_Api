const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a customer
router.put('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.customerId, req.body, { new: true });
    res.status(200).json(customer);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Delete a customer
router.delete('/:customerId', async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.customerId);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
