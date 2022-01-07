portafolio.app.controller('contactController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {
    $scope.current = {}
    $scope.loading = false
    $scope.contactInfo = [
        { icon: 'fas fa-paper-plane', title: 'Email', info: 'paulo.1989.dev@gmail.com' },
        { icon: 'fas fa-map-marker-alt', title: 'Dirección', info: 'Región Metropolitana de Santiago de Chile' }
    ]

    $scope.send = item => {
        $scope.loading = true
        $http.post('/sendEmail', item)
            .then(res => {
                $scope.loading = false
                if (res.data.success)
                    toastr.success(null, 'Mensaje enviado. Gracias por contactarme')
                else {
                    // https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1
                    // https://accounts.google.com/DisplayUnlockCaptcha
                    console.log(JSON.stringify(res.data.data))
                    toastr.info(`Ocurrió un problema al enviar tu correo. Reintenta más tarde`)
                }
            })
            .catch(err => {
                $scope.loading = false
                console.log(`Error interno al enviar email ${JSON.stringify(err)}`)
                toastr.error(`Error interno: ${err.message}`)
            })
    }
}])