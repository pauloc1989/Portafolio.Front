portafolio.app.factory('ModalService', ['$uibModal', ($uibModal) => {
    function open(view, controller, param, onClose, onCancel) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: view,
            controller: controller,
            backdrop: 'static',
            keyboard: false,
            size: 'lg',
            resolve: {
                config: function () {
                    return param
                }
            }
        })

        modalInstance.result.then(function (result) {
            if (onClose !== null && angular.isFunction(onClose))
                onClose.call(this, result)
        }, function (result) {
            if (onCancel !== null && angular.isFunction(onCancel))
                onCancel.call(this, result)
        })
    }

    return {
        open: open
    }
}])