portafolio.app.controller('portafolioController', ['$scope', 'ModalService', function ($scope, ModalService) {
    $scope.portafolio = [
        { project: 'E-learning', company: 'Caja 18', year: '2018', type: 'Web', img: '' },
        { project: 'Agenda Virtual', company: 'Caja 18', year: '2018', type: 'Web', img: '' },
        { project: 'S.A.C.', company: 'Caja 18', year: '2017', type: 'Web', img: '' },
        { project: 'Dalum Website', company: 'Dalum', year: '2019', type: 'Web', img: 'img/portfolio/dalum.png' },
        { project: 'PokéApp Finder', company: 'Particular', year: '2020', type: 'Web', img: 'img/portfolio/pokeApp.png' },
        { project: 'Gestión de Campaña', company: 'Caja 18', year: '2018', type: 'Web', img: '' },
        { project: 'ClaudIA ChatBot', company: 'Entel', year: '2020', type: 'Múltiples plataformas', img: 'img/portfolio/entel.png' },
        { project: 'APIM ClaudIA', company: 'Entel', year: '2020', type: 'Web', img: 'img/portfolio/apim.png' }
    ]

    $scope.open = item => { ModalService.open('app/views/templates/project.html', 'projectDetailController', item, null, null) }
}])

portafolio.app.controller('projectDetailController', ['$scope', '$http', '$uibModalInstance', 'toastr', 'config', function ($scope, $http, $uibModalInstance, toastr, config) {
    $scope.current = {}
    $scope.oneAtATime = true

    const getProject = projectName => {
        $http.get('resources/projects.json')
            .then(async res => {
                const project = await res.data.projects.find(x => x.name === projectName)
                $scope.current = project
            })
            .catch(err => {
                console.log(`Error al obtener detalle del proyecto ${projectName}: ${JSON.stringify(err)}`)
                toastr.error(err.message)
            })
    }

    $scope.close = () => { $uibModalInstance.close() }

    getProject(config)
}])