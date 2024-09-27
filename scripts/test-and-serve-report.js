const { exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Verificar si existe historial anterior y copiarlo
const historyPath = path.join(__dirname, '../allure-report', 'history');
const resultsPath = path.join(__dirname, '../allure-results', 'history');

if (fs.existsSync(historyPath)) {
    fs.copySync(historyPath, resultsPath);
    console.log('Historial copiado correctamente.');
} else {
    console.log('No se encontró historial anterior.');
}

// Ejecutar Cypress tests y mostrar salida en tiempo real
const runTests = exec('npx cypress run --browser chrome');

runTests.stdout.on('data', (data) => {
    console.log(data.toString());
});

runTests.stderr.on('data', (data) => {
    console.error(data.toString());
});

runTests.on('exit', (code) => {
    if (code === 0) {
        console.log('Cypress pruebas completadas. Generando reporte de Allure...');

        // Generar el reporte de Allure y mostrar salida en tiempo real
        const generateReport = exec('allure serve allure-results');

        generateReport.stdout.on('data', (data) => {
            console.log(data.toString());
        });

        generateReport.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        generateReport.on('exit', (code) => {
            if (code === 0) {
                console.log('Reporte de Allure generado exitosamente.');
            } else {
                console.error('Error al generar el reporte de Allure.');
            }
        });

    } else {
        console.error('Las pruebas de Cypress fallaron.');
    }
});
