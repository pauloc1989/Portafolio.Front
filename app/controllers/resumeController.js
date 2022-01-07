portafolio.app.controller('resumeController', ['$scope', function ($scope) {
    $scope.resume = [
        { title: 'Desarrollador BackEnd | FrontEnd', period: '06/2015 - 03/2016', initDate: moment('06/2015'), company: 'SoftCapture', description: 'Miembro del equipo encargado de construir software a medida para clientes particulares como banco Coopeuch, banco CrediChile, Forum. Viendo todo el ciclo de vida desde el análisis hasta la capacitación a usuarios. Trabajando con C#, SQLServer, HTML5, Css3, Bootstrap.' },
        { title: 'Desarrollador BackEnd', period: '03/2016 - 11/2016', initDate: moment('03/2015'), company: 'ConceptoGroup', description: 'Miembro del equipo encargado de construir software a medida para clientes particulares como La Gran Carrera, Entel, y Movistar. Trabajando con C#, AngularJS, PostgresSQL.' },
        { title: 'Desarrollador BackEnd | FrontEnd', period: '01/2017 - 03/2019', initDate: moment('01/2017'), company: 'CCAF 18 de Septiembre', description: 'Miembro del equipo encargado entregar soluciones a las distintas áreas de la Empresa, además de solucionar errores y agregar módulos a sistemas ya existentes. Trabajando con C#, AngularJS, SQLServer, HTML5, Css3, Bootstrap.' },
        { title: 'Desarrollador Inteligencia Artificial (IA)', period: '05/2019 - Presente', initDate: moment('05/2019'), company: 'Akzio', description: 'Miembro del equipo encargado de construir e implementar el asistente virtual de Entel (ClaudIA). Trabajando con NodeJS, AWS, ReactJS, microservicios.' }
    ]
    $scope.skills = {
        back: [
            { title: 'NodeJS', value: 70 },
            { title: '.NET (C#)', value: 80 },
            { title: 'AWS', value: 30 },
            { title: 'SQL', value: 70 },
            { title: 'NoSQL', value: 40 },
            { title: 'GIT', value: 50 }
        ],
        front: [
            { title: 'HTML5', value: '80' },
            { title: 'ReactJS', value: '40' },
            { title: 'AngularJS', value: '70' },
            { title: 'Bootstrap 3+', value: '70' }
        ]
    }
}])