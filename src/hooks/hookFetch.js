
//este es el fecht que usaremos en consola para que me de un array con la lista de url a la que apuntar con las imagenes de cada obra.


fetch("https://console.cloudinary.com/console/api/v1/rest_resources/by_folder?folder_id=cae6fa024e89099aeab1576ef0777cc4b3&sort_by=uploaded_at%20desc&max_results=50")
  .then(response => response.json())
  .then(result => {
    const urls = result.data.map(item => item.secure_url || item.url).filter(Boolean);
    console.log(JSON.stringify({ images: urls }, null, 2));
  })
  .catch(error => console.error("Error:", error));