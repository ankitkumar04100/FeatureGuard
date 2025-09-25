const express = require('express');
const router = express.Router();
const { getReport } = require('../controllers/reportController');

router.post('/upload', (req, res) => {
    const report = getReport(req.body);
    res.json({ success: true, report });
});

module.exports = router;
