// functions/cloudinary.js

const cloudinary = require('cloudinary').v2;

// Configura tus credenciales de Cloudinary
cloudinary.config({
 cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Usa variables de entorno para mantener la seguridad
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Sustituye con tu API Secret
});

exports.handler = async function(event, context) {
  try {
    // Nombre de la carpeta de Cloudinary
    const folderName = 'PORTFOLIO ESCENOGRAFIA/';  // Cambia esto a tu carpeta

    // Llamada a Cloudinary para obtener los recursos (imágenes) en la carpeta
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderName,
      max_results: 100,  // Puedes ajustar esto si tienes más de 100 imágenes
    });

    // Extrae las URLs de las imágenes y las retorna como JSON
    const urls = result.resources.map(resource => resource.secure_url);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Permitir acceso desde cualquier origen
        "Access-Control-Allow-Methods": "GET, OPTIONS",  // Métodos permitidos
        "Access-Control-Allow-Headers": "Content-Type",  // Cabeceras permitidas
      },
      body: JSON.stringify(urls),  // Devuelve las URLs de las imágenes
    };
  } catch (error) {
    console.error('Error al obtener las imágenes de Cloudinary:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener imágenes' }),
    };
  }
};
