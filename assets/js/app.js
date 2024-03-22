// Definimos la dirección base de la API de GitHub
const baseEndpoint = 'https://api.github.com';
// Concatenamos la dirección base con "/users" para obtener la dirección de los usuarios
const usersEndpoint = `${baseEndpoint}/users`;
// Seleccionamos el elemento del documento HTML con la etiqueta 'name' y lo almacenamos en la variable $n
const $n = document.querySelector('.name');
// Seleccionamos el elemento del documento HTML con el ID 'blog' y lo almacenamos en la variable $b
const $b = document.querySelector('.blog');
// Seleccionamos el elemento del documento HTML con la clase 'location' y lo almacenamos en la variable $l
const $l = document.querySelector('.location');

// Definimos una función para mostrar la información de un usuario
async function displayUser(username) {
  // Cambiamos el texto del elemento $n a "Cargando..." para indicar que se está obteniendo la información
  $n.textContent = 'Cargando...';
  try {
    // Realizamos una solicitud para obtener la información del usuario especificado
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Extraemos los datos de la respuesta en formato JSON
    const data = await response.json();
    // Actualizamos el contenido de los elementos HTML con la información del usuario obtenida
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    // Si ocurre un error durante la solicitud, lo manejamos mostrando un mensaje de error en la consola y en el elemento $n
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`;
  }
}

// Llamamos a la función displayUser con el nombre de usuario 'stolinski' y manejamos cualquier error que ocurra
displayUser('stolinski');