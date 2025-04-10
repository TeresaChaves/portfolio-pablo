// Ejemplo de Netlify Function o backend en Node.js

const cloudinary = require('cloudinary').v2;
const fetch = require('node-fetch');

// Configurar Cloudinary con las credenciales API
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async function(event, context) {
  try {
    // Obtén las imágenes de la carpeta
    const result = await cloudinary.api.resources({
      type: 'upload', // Filtra las imágenes subidas
      prefix: 'PORTFOLIO ESCENOGRAFIA/cucaracha/', // Reemplaza con tu carpeta
      max_results: 100,
    });

    const imagenes = result.resources.map((resource) => resource.secure_url);
    return {
      statusCode: 200,
      body: JSON.stringify({ imagenes }),
    };
  } catch (error) {
    console.error('Error al obtener imágenes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener imágenes' }),
    };
  }
};
