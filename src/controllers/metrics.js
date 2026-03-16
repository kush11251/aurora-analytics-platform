const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/aggregate', (req, res) => {
    metricsService.aggregateMetrics().then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({ message: error.message });
    });
});
module.exports = router;