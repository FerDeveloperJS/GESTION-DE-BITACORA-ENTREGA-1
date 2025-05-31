const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bitacoraRoutes = require('./routes/bitacoraRoutes');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRoutes);
app.use('/api/bitacora', bitacoraRoutes);

app.use((req, res, next) => {
    res.status(404).send({ message: 'Not Found' });
});

module.exports = app;