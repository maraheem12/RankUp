    const express = require('express');
    const cors = require('cors');
    const connectDB = require('./config/db');
    const rankingRouter = require('./routes/ranking');

    require('dotenv').config();
    const mongoose = require('mongoose');
    const app = express();
    connectDB();

    app.use(cors());
    app.use(express.json());
    app.use('/api', rankingRouter);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    