# Plantilla regalo de aniversario - 2 años

Esta plantilla funciona como una mini web-app para navegador, Mac, Windows, Android y iPhone.

## Cómo verla
Abre `index.html` en el navegador.

## Cómo personalizarla rápido
1. En `index.html`, cambia los textos de cada sección.
2. En `script.js`, cambia esta línea por la fecha real de vuestro aniversario:

```js
const START_DATE = "2024-06-15T00:00:00";
```

3. Para poner fotos:
   - Crea una carpeta `assets/fotos`.
   - Mete tus imágenes dentro.
   - Sustituye un bloque como este:

```html
<div class="photo-placeholder">Foto 1</div>
```

por algo así:

```html
<img class="real-photo" src="assets/fotos/foto1.jpg" alt="Nuestro recuerdo">
```

Y añade en `style.css`:

```css
.real-photo {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  margin-bottom: 18px;
}
```

## Para que parezca una app en iPhone
1. Sube la carpeta a GitHub Pages, Netlify o Vercel.
2. Abre la web desde Safari en el iPhone.
3. Pulsa compartir.
4. Pulsa “Añadir a pantalla de inicio”.

Aparecerá como una app con icono.

## Ideas para hacerlo más personal
- Cambia `Anniversary.exe` por un nombre interno vuestro.
- Cambia los capítulos de la línea temporal.
- Añade una canción de fondo con un botón de reproducción.
- Cambia el mensaje secreto del modal.
- Añade una contraseña real antes de mostrar el regalo.
