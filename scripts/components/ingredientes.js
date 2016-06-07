(function() {
    angular
        .module('cookbook')
        .component('ingredientes', {
            bindings: {
                ingredientes: '<',
                onNuevoIngrediente: '&',
                onIngredienteEliminado : '&'
            },
            templateUrl: 'views/ingredientes.html',
            controller: ingredientes
        });
    ingredientes.$inject = [];

    function ingredientes () {
        var $ctrl = this;
        
        // onInit: evento inicial del ciclo-de-vida de un componente (inicializaciones aquí)
        $ctrl.$onInit = function () {
            $ctrl.ingrediente = {
                nombre : '',
                cantidad : 1
            };
        }

        $ctrl.onKeyUp = function ($event) {
            var key = $event.which || $event.keyCode;
            // Hay navegadores que soporan 'which' y otros 'keyCode'
            if (key === 13 // 13=>Tecla Intro
                && $ctrl.ingrediente.nombre 
                && !existeIngrediente($ctrl.ingrediente.nombre)) { 

                $ctrl.onNuevoIngrediente({ingrediente: $ctrl.ingrediente});
                $ctrl.ingrediente = {
                    nombre: '',
                    cantidad: 1
                };
            }

        }

        $ctrl.eliminar = function (indice) {
            $ctrl.onIngredienteEliminado({indice: indice})
        }

        function existeIngrediente (nombreIngrediente) {
            return $ctrl.ingredientes.filter(function (ingrediente) {
                return ingrediente.nombre.toUpperCase() === nombreIngrediente.toUpperCase();
            }).length > 0
        }

    }

})();