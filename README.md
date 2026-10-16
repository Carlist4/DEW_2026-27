# DEW_2026-27

## Entorno JavaScript con Docker

Necesitas tener instalado Docker Desktop. El contenedor incluye Node.js y monta
la carpeta del proyecto, así que los cambios que hagas se guardan directamente
en tus archivos.

Desde la carpeta del proyecto, abre una terminal y ejecuta:

```sh
docker compose build
```

Para abrir Node.js en modo interactivo:

```sh
docker compose run --rm node
```

Para ejecutar un archivo JavaScript:

```sh
docker compose run --rm node node ejerciciosTema1/ejercicio1.js
```

Para salir del modo interactivo, escribe `.exit` o pulsa `Ctrl+D`.

Los ejercicios que manipulan el DOM, como `personas/personas.html`, se ejecutan
en un navegador, no en Node.js. Abre el archivo HTML en el navegador desde tu
equipo; no hace falta meter el navegador dentro del contenedor.

Para trabajar en casa y en clase, clona este repositorio desde GitHub en cada
equipo. Después de trabajar, sube tus cambios con `git add`, `git commit` y
`git push`; en el otro equipo, recupera los cambios con `git pull`.