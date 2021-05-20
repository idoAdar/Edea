const express = require('express');
const edeaController = require('../controller/edeaController');

const route = express.Router();

// Method: GET
// DESC: Fetch All Table (With FK from 'Customers' Table)
// URL: http://localhost:5000/edea/main
// Security: Public
route.get('/main', edeaController.getAll);

// Method: GET
// DESC: Calculate 'Orders' Table
// URL: http://localhost:5000/edea/statistic
// Security: Public
route.get('/statistic', edeaController.getStatistic);

module.exports = route;