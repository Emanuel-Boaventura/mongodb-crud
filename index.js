require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./src/routes/product.route');

const PORT = process.env.PORT || 3333;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;
const MONGODB_PROJECT = process.env.MONGODB_CLUSTER;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/products', productRoute);

app.get('/', (req, res) => {
  res.send('You are on Mongodb-Crud Server');
});

mongoose
  .connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.vlh1v.mongodb.net/${MONGODB_PROJECT}?retryWrites=true&w=majority&appName=MainCluster`
  )
  .then(() => {
    console.log('Connected to MongoDB!');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log('Connection error:', err));
