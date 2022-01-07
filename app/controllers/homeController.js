portafolio.app.controller('homeController', ['$scope', function ($scope) {
    $scope.iam = [
        { name: 'Desarrollador', first: true },
        { name: 'Fotógrafo', first: false },
        { name: 'Freelancer', first: false }
    ]
    $scope.social = [
        { name: 'facebook', icon: 'fa-facebook-f', url: '', visible: false },
        { name: 'linkedin', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/paulo-u-rivera-ab033562/', visible: true },
        { name: 'es.stackoverflow', icon: 'fa-stack-overflow', url: 'https://es.stackoverflow.com/users/30131/paulo-urbano-rivera', visible: true },
        { name: 'flickr', icon: 'fa-flickr', url: 'https://www.flickr.com/photos/154504667@N08/', visible: true }
    ]
}])