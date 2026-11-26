/* ===== Mangas =====
   Para publicar un manga:
   1. Crea una carpeta en tu repositorio, por ejemplo "mangas/mi-manga", y sube ahí la portada y las páginas
      (imágenes JPG, PNG o WebP, con nombres como 01.jpg, 02.jpg, 03.jpg).
   2. Agrega un bloque nuevo en la lista de abajo, así:
      {
        id: "mi-manga",              // sin espacios ni acentos
        titulo: "Mi manga", autor: "Tu nombre", genero: "Aventura", estado: "En emisión",
        sinopsis: "De qué trata...",
        portada: "mangas/mi-manga/portada.jpg",
        capitulos: [
          { titulo: "Capítulo 1", paginas: ["mangas/mi-manga/01.jpg", "mangas/mi-manga/02.jpg"] }
        ]
      },
   El manga de ejemplo de abajo es solo para que veas cómo se ve: bórralo cuando publiques el tuyo. */
const mSvg = s => "data:image/svg+xml;utf8," + encodeURIComponent(s);
const mPagina = (t1, t2, t3) => mSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 850"><rect width="600" height="850" fill="#fff"/>
<g stroke="#111" stroke-width="5"><rect x="30" y="30" width="540" height="240" fill="#dfe6f0"/><rect x="30" y="290" width="260" height="260" fill="#f1e3c8"/><rect x="310" y="290" width="260" height="260" fill="#cfd8e6"/><rect x="30" y="570" width="540" height="250" fill="#e9d6e8"/></g>
<g fill="#222"><circle cx="150" cy="190" r="38"/><rect x="118" y="226" width="64" height="44"/><circle cx="440" cy="430" r="46"/><rect x="400" y="476" width="80" height="74"/><circle cx="300" cy="720" r="50"/><rect x="255" y="770" width="90" height="50"/></g>
<g fill="#fff" stroke="#111" stroke-width="3"><ellipse cx="380" cy="100" rx="140" ry="48"/><ellipse cx="160" cy="350" rx="105" ry="40"/><ellipse cx="450" cy="610" rx="120" ry="38"/></g>
<g font-family="Arial,sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#111"><text x="380" y="107">${t1}</text><text x="160" y="357">${t2}</text><text x="450" y="617">${t3}</text></g></svg>`);
const MANGAS = [
  { id: "ejemplo", titulo: "Mi primer manga", autor: "Ejemplo", genero: "Aventura", estado: "En emisión",
    sinopsis: "Un manga de ejemplo para que veas cómo se leen las páginas. Reemplázalo por tu propia historia.",
    portada: mSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#101a33"/><circle cx="150" cy="150" r="90" fill="#ff4fa3" opacity=".85"/><circle cx="150" cy="150" r="58" fill="#26d6ff" opacity=".9"/><path d="M0 330h300v70H0z" fill="#0a1022"/><text x="150" y="300" font-family="Arial,sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#fff">MI PRIMER</text><text x="150" y="340" font-family="Arial,sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#ffd34f">MANGA</text></svg>`),
    capitulos: [
      { titulo: "Capítulo 1", paginas: [mPagina("¡Por fin llegué!", "¿Quién anda ahí?", "Esto apenas empieza..."), mPagina("Vamos juntos.", "No tengas miedo.", "¡Adelante!")] },
      { titulo: "Capítulo 2", paginas: [mPagina("Un nuevo día.", "¿Lo oyes?", "Continuará...")] }
    ] }
];
