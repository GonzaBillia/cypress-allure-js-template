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

#### 1. Clona este repositorio:

```bash
git clone https://github.com/usuario/cypress-allure-js-template.git
```

### 2.Instala las dependencias:

```bash
npm install
```
### 3.Ejecuta las pruebas o genera el reporte con uno de los scripts (ver sección de Uso).

## Uso

### Scripts disponibles

#### Correr pruebas de Cypress:

```bash
npm run cypress:runner
```

#### Correr pruebas en Chrome:

```bash
npm run cypress:run-chrome
```

#### Generar reporte de Allure y abrirlo:

Ejecuta las pruebas, genera el reporte y guarda el historial:

```bash
npm run allure:run-report
```

#### Generar reporte temporal y abrirlo (pruebas no definitivas):

Ejecuta las pruebas y abre el reporte en un directorio temporal:

```bash
npm run allure:run-local
```

## Scripts detallados

#### `allure:run-report`

Este script ejecuta las pruebas de Cypress en el navegador Chrome, copia el historial de los resultados previos si existe, y luego genera un reporte de Allure sobreescribiendo el anterior. Al finalizar, abre el reporte en el navegador.

#### `allure:run-local`

Al igual que el script anterior, ejecuta las pruebas y genera un reporte de Allure, pero en este caso no sobreescribe el reporte anterior, sino que abre el nuevo reporte en un directorio temporal. Ideal para pruebas experimentales.

## Estructura del Proyecto

```bash
cypress-allure-js-template/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   └── spec.cy.js
│   ├── fixtures/
│   ├── global/
│   ├── plugins/
│   ├── support/
│   ├── utils/
|   ├── screenshots/
|   └── videos/
├── scripts/
│   ├── allure:run-report.js
│   └── allure:run-local.js
├── README.md
└── package.json
```

## Contribuir
Si encuentras algún problema o tienes sugerencias, no dudes en abrir un issue o enviar un pull request.

