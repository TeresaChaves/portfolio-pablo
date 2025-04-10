// src/config/cloudinaryConfig.js

// cloudinaryConfig.js

const cloudinary = require('cloudinary').v2;

// Configura Cloudinary usando las variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Usa variables de entorno para mantener la seguridad
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;


