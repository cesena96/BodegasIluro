# Logo de Bodegas Iluro

## Contenido

sellos/
  sello-a.svg           Sello de doble anillo fino, en vino (#6d1a36). Para fondos claros.
  sello-a-negativo.svg  El mismo sello en arena (#e6d5b8). Para fondos vino u oscuros y modo oscuro.
  sello-c.svg           Disco macizo en vino con todo en arena. Para fondos claros.
  (cada uno tiene también su PNG de 1024 px con fondo transparente)

favicon/
  favicon.svg           Icono principal (ánfora en arena sobre cuadrado vino).
  favicon.ico           16, 32 y 48 px, para navegadores antiguos.
  apple-touch-icon.png  180 px sin esquinas redondeadas (iOS las aplica solo).
  icon-192.png          Para un manifest de PWA (opcional).
  icon-512.png          Para un manifest de PWA (opcional).

Los textos de los sellos están convertidos a trazados: no dependen de ninguna fuente.
Los SVG no tienen fondo (transparente) salvo el favicon.

## Colores

  Vino  #6d1a36
  Arena #e6d5b8

## Dónde ponerlos (sugerencia)

  favicon/*  ->  carpeta public/ de la web (en la raíz, junto a index.html)
  sellos/*   ->  src/assets/ (para importarlos desde React) o public/img/

## Enlaces del favicon para el <head> de index.html

  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
