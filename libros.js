// Para agregar un libro: copia un bloque {...}, cambia los datos y sube su carpeta a /libros/
// Cada libro necesita una carpeta con sus páginas como imágenes: libros/mi-libro/paginas/001.jpg, 002.jpg, ...
// La primera página (001.jpg) es la portada.
const LIBROS = [
  {
    id: "el-guardian",
    titulo: "El guardián que se ganó mi corazón",
    autor: "Jhonathan",
    genero: "Novela romántica",
    anio: 2026,
    carpeta: "libros/el-guardian",
    paginas: 31,
    portada: "libros/el-guardian/paginas/001.jpg",
    sinopsis: "James no tiene estudios, ni dinero, ni apellido. Tiene las manos de quien aprendió a defenderse solo y una promesa que le hizo a su madre antes de que muriera. Una noche de lluvia salva a Valentina de un asalto, y ella, hija de una familia acomodada y sola entre muros altos, publica un anuncio buscando guardaespaldas."
  }
  // , { id: "otro-libro", titulo: "…", autor: "…", genero: "Cuento", anio: 2026,
  //     carpeta: "libros/otro-libro", paginas: 20, portada: "libros/otro-libro/paginas/001.jpg", sinopsis: "…" }
];
