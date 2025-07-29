    const express = require('express');
    const User = require('../models/User');
    const router = express.Router();

    router.get('/ranking', async (req, res) => {
        try {
            const users = await User.find().sort({ score: -1 }).limit(10);
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    module.exports = router;
    