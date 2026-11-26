// Para agregar un libro: copia un bloque {...}, cambia los datos y sube su carpeta a /libros/
// Cada libro necesita una carpeta con sus páginas como imágenes: libros/mi-libro/paginas/001.jpg, 002.jpg, ...
// La primera página (001.jpg) es la portada.
const LIBROS = [
  {
    id: "el-guardian",
    titulo: "El guardián que se ganó mi corazón",
    autor: "Jhonathan E.",
    genero: "Novela romántica",
    anio: 2026,
    carpeta: "libros/el-guardian",
    paginas: 31,
    portada: "libros/el-guardian/paginas/001.jpg",
    sinopsis: "James no tiene estudios, ni dinero, ni apellido. Solo tiene las manos de quien aprendió a defenderse solo y una promesa que le hizo a su madre antes de que muriera. Una noche de lluvia salva a Valentina, una joven de familia acomodada y sola entre muros altos, y ella publica un anuncio buscando guardaespaldas. Entre el rechazo de una madre que mide a las personas por lo que tienen y un antiguo socio dispuesto a todo, los dos tendrán que decidir si se atreven a quererse en voz alta."
  }
  // , { id: "otro-libro", titulo: "…", autor: "…", genero: "Cuento", anio: 2026,
  //     carpeta: "libros/otro-libro", paginas: 20, portada: "libros/otro-libro/paginas/001.jpg", sinopsis: "…" }
];
