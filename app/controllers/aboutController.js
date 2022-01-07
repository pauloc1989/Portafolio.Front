portafolio.app.controller('aboutController', ['$scope', 'startDate', function ($scope, startDate) {
    $scope.startDate = moment().diff(moment(startDate), 'years')
    $scope.jobInfo = [
        { icon: 'fa-award', title: `${$scope.startDate} años`, subtitle: 'Experiencia' },
        { icon: 'fa-certificate', title: '10+ proyectos', subtitle: 'Participaciones' },
        { icon: 'fa-user-astronaut', title: 'Freelancer', subtitle: 'Disponible' }
    ]
    $scope.interests = [
        { icon: 'fa-music', name: 'Música' },
        { icon: 'fa-route', name: 'Viajes' },
        { icon: 'fa-camera', name: 'Fotografía' },
        { icon: 'fa-book', name: 'Libros' },
        { icon: 'fa-bicycle', name: 'Bicicleta' },
        { icon: 'fa-smile', name: 'Capoeira' },
        { icon: 'fa-gamepad', name: 'Videojuegos' }
    ]
    $scope.services = [
        { icon: 'fa-code', title: 'Desarrollo web', description: 'Construcción a nivel lógico de distinas plataformas, adaptadas a las necesidades del negocio | empresa | persona; la idea es lograr la mayor satisfacción tanto a nivel personal como a nivel funcional para de esta forma obtener el producto que se busca y no el que se cree buscar.' },
        { icon: 'fa-desktop', title: 'Diseño web', description: 'Diseño mediante plantillas prefabricadas o plantillas personalizadas para la mejor visualización de la plataforma. Porque un producto puede ser eficiente y también agradable a la vista ;)' },
        { icon: 'fa-mobile-alt', title: 'Diseño responsivo', description: 'Todo producto se entrega con diseño responsivo, lo que se refleja en que desde el dispositivo que lo veas (teléfonos, tablets, notebooks, etc) se ajustará al mismo.' },
        { icon: 'fa-hammer', title: 'Soporte garantizado', description: 'Si algo no anda como debe (algo que puede pasar, pero no DEBERÍA) haré lo humanamente posible para corregirlo y así entregar el producto que esperas :D' }
    ]
    // $scope.testimonials = [
    //     { img: 'img/testimonials/mike diaz.jpg', name: 'Mike Díaz Manrique', position: 'Scrum Master ACHS', text: `En el tiempo que trabaje con Paulo en la célula IA, yo como SM pude validar y constatar su capacidad técnica y profesional con la que pudimos afrontar diversos problemas, así lo hicimos en múltiples requerimientos que nos solicitaban los Stakeholders y el PO, hicimos muchas cosas importantes y de gran valor para el negocio y que requerían de conocimientos técnicos, habilidades blandas y comunicaciones inter personales con diversas áreas de negocios, una de las que puedo recordar fue la creación de un BOT que se pudiera llamar a través de una cuenta empresarial de twitter, en la cual nuestro compañero destaco un buen desempeño, buena fluidez, buen manejo de la situación, buena comunicación y un buen resultado en la aplicación...` },
    // ]
}])