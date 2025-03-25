// app.js

// server.js

const http = require('http');
const fs = require('fs');
const cloudinary = require('./cloudinaryConfig');  // Importa la configuración de Cloudinary
const multiparty = require('multiparty');  // Usamos multiparty para manejar formularios con archivos

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const form = new multiparty.Form();

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Error parsing form data');
      }

      const imagePath = files.image[0].path;  // Asegúrate de que el campo de imagen en el formulario sea "image"

      cloudinary.uploader.upload(imagePath, (error, result) => {
        if (error) {
          res.statusCode = 500;
          return res.end('Error uploading image');
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ url: result.url }));  // Devuelve la URL de la imagen subida
      });
    });
  } else {
    // Maneja otros tipos de peticiones
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
