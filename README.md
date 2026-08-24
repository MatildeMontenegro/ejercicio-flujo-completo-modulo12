# Ejercicio Flujo Completo Módulo 12

## Objetivo del proyecto

Este proyecto tiene como objetivo implementar un flujo completo de automatización de pruebas que combine validaciones de interfaz web, pruebas de API y ejecución continua mediante un pipeline CI/CD.

El proyecto integra pruebas automatizadas desarrolladas con Playwright y Supertest/Jest, ejecutadas localmente y posteriormente integradas en GitHub Actions.

## Herramientas utilizadas

- Node.js
- npm
- Playwright
- Jest
- Supertest
- Git
- GitHub
- GitHub Actions

## Estructura del repositorio

ejercicio-flujo-completo-modulo12/
|
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|
|-- api.test.js
|-- web.spec.js
|-- package.json
|-- package-lock.json
|-- .gitignore
`-- README.md

## Descripción de archivos principales

- web.spec.js: contiene la prueba automatizada de interfaz web desarrollada con Playwright.
- api.test.js: contiene la prueba automatizada de API utilizando Supertest y Jest.
- package.json: define las dependencias y scripts necesarios para ejecutar las pruebas.
- .github/workflows/ci.yml: contiene la configuración del pipeline CI/CD de GitHub Actions.
- .gitignore: excluye archivos y carpetas que no deben subirse al repositorio.
- README.md: contiene la documentación técnica del proyecto.

## Instalación

Clonar el repositorio:

git clone https://github.com/MatildeMontenegro/ejercicio-flujo-completo-modulo12.git

Ingresar a la carpeta:

cd ejercicio-flujo-completo-modulo12

Instalar las dependencias:

npm install

Instalar Chromium para Playwright:

npx playwright install chromium

## Ejecución de pruebas

### Prueba de API

Ejecutar:

npm run test:api

La prueba realiza una solicitud GET al endpoint:

https://jsonplaceholder.typicode.com/posts/1

Se valida que:

- La respuesta tenga código HTTP 200.
- El objeto retornado contenga el identificador esperado.
- La respuesta incluya la propiedad title.

### Prueba Web

Ejecutar:

npm run test:web

La prueba accede al sitio:

https://example.com

y valida que el título de la página sea:

Example Domain

Playwright genera además un reporte HTML con el resultado de la ejecución.

Para visualizar el reporte localmente:

npx playwright show-report

## Flujo CI/CD

El proyecto utiliza GitHub Actions mediante el archivo:

.github/workflows/ci.yml

El workflow se activa automáticamente cuando se realiza un push o un pull request sobre las ramas main o master.

El pipeline contiene dos jobs independientes.

### API Tests

Este job:

1. Descarga el repositorio.
2. Configura Node.js.
3. Instala las dependencias mediante npm ci.
4. Ejecuta las pruebas de API.
5. Genera un reporte JSON.
6. Sube el reporte como artefacto del pipeline.

### Web Tests

Este job:

1. Descarga el repositorio.
2. Configura Node.js.
3. Instala las dependencias mediante npm ci.
4. Instala Chromium para Playwright.
5. Ejecuta las pruebas Web.
6. Genera el reporte HTML de Playwright.
7. Sube el reporte como artefacto del pipeline.

Los jobs API Tests y Web Tests se ejecutan de forma independiente y en paralelo.

## Despliegue y ejecución en GitHub Actions

Para activar una nueva ejecución del pipeline se utilizan los siguientes comandos:

git add .
git commit -m "Actualizar documentación del proyecto"
git push

Después del push, GitHub Actions ejecuta automáticamente las pruebas configuradas.

Los resultados pueden revisarse desde la pestaña Actions del repositorio en GitHub.

En una ejecución correcta del proyecto se obtiene:

- API Tests: aprobado.
- Web Tests: aprobado.
- Estado general del workflow: Success.
- Reporte API generado como artefacto.
- Reporte HTML de Playwright generado como artefacto.