import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8080; // Cambio de puerto a 8080

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/ecommerceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});