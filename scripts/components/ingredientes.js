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
        $ctrl.nuevoIngrediente;
        
        // onInit: evento inicial del ciclo-de-vida de un componente (inicializaciones aquí)
        $ctrl.$onInit = function () {
            $ctrl.nuevoIngrediente = {
                nombre: '',
                cantidad: 1
            }

            $ctrl.ingredientes = [];
        }

        $ctrl.onKeyUp = function ($event) {
            var key = $event.which || $event.keyCode;
            console.log(key)
            // Hay navegadores que soporan 'which' y otros 'keyCode'

            if (key === 13 && $ctrl.nuevoIngrediente) { // 13=>Tecla Intro
                $ctrl.ingredientes.push($ctrl.nuevoIngrediente);
                $ctrl.nuevoIngrediente = {
                    nombre: '',
                    cantidad: 1
                };
            }

        }

    }

})();