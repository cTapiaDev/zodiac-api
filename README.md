# Zodiac API

__Zodiac API__ es una aplicación desarrollada en Node.js usando Express. Ofrece información sobre signos zodiacales en formato JSON. Los usuarios pueden consultar la lista de todos los signos zodiacales y obtener detalles específicos de cada uno usando su ID.

- - -
- - -
## Rutas en producción
- https://zodiac-api-two.vercel.app/sign - Lista de signos zodiacales. (Inglés)
- https://zodiac-api-two.vercel.app/sign/1 - Ejemplo de signo zodiacal con ID 1 (Inglés)
- https://zodiac-api-two.vercel.app/es/sign - Lista de signos zodiacales. (Español)
- https://zodiac-api-two.vercel.app/es/sign/1 - Ejemplo de signo zodiacal con ID 1 (Español)
- - -
- - -

## Características
- Devuelve una lista de signos zodiacales.
- Proporciona información detallada de cada signo zodiacal mediante una ruta dinámica basada en el ID del signo.
- Desplegado en Vercel para acceso fácil y gratuito.

## Endpoints disponibles
- __GET /sign__ - Devuelve una lista de todos los signos zodiacales.
- __GET /sign/id__ - Devuelve información detallada de un signo zodiacal en específico.

- - -
- - -

## Instalación y ejecución local
Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu máquina local:

### 1. Clonar el repositorio
```
git clone https://github.com/cTapiaDev/zodiac-api.git
cd zodiac-api
```

### 2. Instalar dependencias
Asegúrate de tener Node.js instalado en tu sistema. Luego, instala las dependencias necesarias:
```
npm install
```

### 3. Ejecutar API localmente
Inicia el servidor ejecutando el siguiente comando:
```
node index.js
```
Esto iniciará la API en http://localhost:3000
- http://localhost:3000/sign - Lista de signos zodiacales.
- http://localhost:3000/sign/id - Información detallada de un signo.

### 4. Pruebas de los endpoints
Puedes probar los endpoints utilizando herramientas como Postman o directamente desde el navegador, según las rutas configuradas en la API.
- - -
- - -

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar la API o añadir nuevas funcionalidades, por favor realiza un __fork__ del repositorio y envía un __pull request__.

1. Haz un fork del proyecto.
2. Crea una rama con tus cambios: `git checkout -b feature/nueva-funcionalidad`
3. Realiza un commit de tus cambios: `git commit -m 'Añadida nueva funcionalidad'`
4. Sube la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un __pull request__.
- - -
- - -

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.