const express = require('express');
const PORT = process.env.PORT || 5000;
const edeaRoutes = require('./routes/edeaRoutes');

const app = express();
app.use(express.json({ extended: false }));

// CORS Middleware:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})

// Routes
app.use('/edea', edeaRoutes);

// Error Middelware:
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    return res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));