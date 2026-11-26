/* ===== Sala de dibujos =====
   Para agregar los tuyos: sube la imagen a una carpeta llamada "dibujos" en tu repositorio
   y añade una línea nueva en la lista, por ejemplo:
   { titulo: "Mi gato", autor: "Jhonathan", imagen: "dibujos/gato.png" },
   Los 3 dibujos de abajo son solo de ejemplo: bórralos cuando pongas los tuyos. */
const dibujoSvg = s => "data:image/svg+xml;utf8," + encodeURIComponent(s);
const DIBUJOS = [
  { titulo: "Amanecer en la colina", autor: "Ejemplo", imagen: dibujoSvg(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#fbe3b0"/><circle cx="150" cy="170" r="62" fill="#f2a43b"/><g stroke="#f2a43b" stroke-width="6" stroke-linecap="round"><path d="M150 70v-28M82 100l-18-20M218 100l18-20M60 160H28M240 160h32"/></g><path d="M0 220q80-60 160-10t140-20v110H0z" fill="#5b8a52"/><path d="M0 250q90-40 170 0t130-10v60H0z" fill="#3e6b3a"/></svg>`) },
  { titulo: "El gato lector", autor: "Ejemplo", imagen: dibujoSvg(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#cfd9ea"/><path d="M80 120l-10-55 45 28zM220 120l10-55-45 28z" fill="#555"/><ellipse cx="150" cy="150" rx="80" ry="70" fill="#666"/><ellipse cx="122" cy="140" rx="12" ry="16" fill="#fff"/><ellipse cx="178" cy="140" rx="12" ry="16" fill="#fff"/><circle cx="124" cy="144" r="6" fill="#222"/><circle cx="176" cy="144" r="6" fill="#222"/><path d="M142 166h16l-8 9z" fill="#e58a9a"/><path d="M150 175v10M130 190q20 12 40 0" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M95 245l55-22 55 22v35l-55-18-55 18z" fill="#c0392b"/><path d="M150 223v57" stroke="#7b241c" stroke-width="3"/></svg>`) },
  { titulo: "Noche de estrellas", autor: "Ejemplo", imagen: dibujoSvg(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#16294a"/><circle cx="210" cy="90" r="42" fill="#f7f1d3"/><circle cx="226" cy="80" r="38" fill="#16294a"/><g fill="#fff6c9"><circle cx="60" cy="60" r="3"/><circle cx="110" cy="110" r="2"/><circle cx="40" cy="150" r="2.5"/><circle cx="150" cy="50" r="2"/><circle cx="260" cy="170" r="3"/><circle cx="90" cy="190" r="2"/></g><path d="M0 260l40-70 30 40 40-60 50 90z" fill="#0d1a30"/><path d="M110 260l60-80 40 50 50-40 40 70z" fill="#0a1426"/></svg>`) }
];
