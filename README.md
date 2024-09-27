# Cypress Allure JS Template

**Version:** 1.0.0  
**Author:** Gonzalo Billia  
**License:** ISC  

## Descripción

Este repositorio es una plantilla que integra Cypress con Allure para la generación de reportes, facilitando la ejecución de pruebas automatizadas y su reporte visual. Además, incluye configuraciones básicas para ESLint y Prettier, ayudando a mantener un código limpio y estandarizado.

### Características

- **Cypress**: Herramienta de testing para aplicaciones web.
- **Allure**: Framework para reportar resultados de pruebas, con integración visual y funcional.
- **ESLint**: Linter para mantener un código JavaScript limpio.
- **Prettier**: Formateador de código.
- **Node.js Scripts**: Scripts personalizados para la ejecución de pruebas y generación de reportes con Allure.

## Requisitos

- Node.js >= 14
- Cypress >= 13.15.0
- Allure >= 2.30.0

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/usuario/cypress-allure-js-template.git
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta las pruebas o genera el reporte con uno de los scripts (ver sección de Uso).

Uso
Scripts disponibles
Correr pruebas de Cypress:

bash
Copiar código
npm run cypress:runner
Correr pruebas en Chrome:

bash
Copiar código
npm run cypress:run-chrome
Generar reporte de Allure y abrirlo:

Ejecuta las pruebas, genera el reporte y guarda el historial:

bash
Copiar código
npm run allure:run-report
Generar reporte temporal y abrirlo (pruebas no definitivas):

Ejecuta las pruebas y abre el reporte en un directorio temporal:

bash
Copiar código
npm run allure:run-local
Scripts detallados
allure:run-report
Este script ejecuta las pruebas de Cypress en el navegador Chrome, copia el historial de los resultados previos si existe, y luego genera un reporte de Allure sobreescribiendo el anterior. Al finalizar, abre el reporte en el navegador.

allure:run-local
Al igual que el script anterior, ejecuta las pruebas y genera un reporte de Allure, pero en este caso no sobreescribe el reporte anterior, sino que abre el nuevo reporte en un directorio temporal. Ideal para pruebas experimentales.

Estructura del Proyecto
cypress/: Carpeta que contiene todas las configuraciones y pruebas de Cypress.
downloads/: Archivos descargados durante las pruebas.
e2e/: Pruebas end-to-end (por ejemplo: spec.cy.js).
fixtures/: Datos de prueba.
global/, plugins/, support/: Configuraciones adicionales de Cypress.
utils/: Funciones utilitarias para las pruebas.
screenshots/, videos/: Resultados visuales de las pruebas.
scripts/: Contiene los scripts de Node.js para la integración con Allure.
Contribuir
Si encuentras algún problema o tienes sugerencias, no dudes en abrir un issue o enviar un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia ISC.

Copiar código

Este archivo README cubre la descripción de tu proyecto, las instrucciones de uso, y los detalles de los scripts que has mencionado. Puedes personalizar los enlaces de GitHub y agregar más detalles si lo consideras necesario.
