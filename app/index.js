var portafolio = portafolio || {}

portafolio.app = angular.module('portafolioApp', ['ngResource', 'ngAnimate', 'toastr', 'ui.bootstrap'])

// portafolio.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//     $locationProvider.hashPrefix('')

//     $routeProvider
//         .when('/', { templateUrl: 'app/views/home.html', controller: 'homeController' })
//         .when('/about', { templateUrl: 'app/views/about.html', controller: 'aboutController' })
//         .otherwise({ redirectTo: '/' })
// }])

// portafolio.app.run(['$rootScope', function ($rootScope) {
//     $rootScope.slickConfig = {
//         //infinite: true,
//         //enabled: true,
//         autoplay: true,
//         draggable: true,
//         pauseOnHover: false,
//         autoplaySpeed: 4000,
//         arrows: false,
//         //fade: true,
//         //dots: true
//     }
// }])

portafolio.app.constant('startDate', '01-12-2012')