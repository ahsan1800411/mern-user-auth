const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middlewares;
app.use(express.json());

// routes
app.use('/api', userRoutes);

module.exports = app;
