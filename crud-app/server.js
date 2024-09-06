const express = require('express');
const sequelize = require('./config/database');
const fruitRoutes = require('./routes/fruitRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/fruits', fruitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
  }
});
