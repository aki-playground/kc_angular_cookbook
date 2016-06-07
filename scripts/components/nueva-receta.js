(function() {
    angular
        .module('cookbook')
        .component('nuevaReceta', {
            bindings : {
                $router: '<' //para posteriormente poder acceder a $ctrl.$router
            },
            templateUrl: 'views/nueva-receta.html',
            controller: nuevaReceta
        })
    nuevaReceta.$inject = ['ServicioRecetas'];
    function nuevaReceta (ServicioRecetas) {
        var $ctrl = this;
        var imagenReceta;
        $ctrl.guardarReceta = function (receta) {
            ServicioRecetas
                .guardarReceta(receta, imagenReceta)
                .then(function (response) {

                    // $router tiene la info sobre la ruta navegada
                    // Es necesario indicar en bingings la interfaz de comunicación
                    $ctrl.$router.navigate(['MisRecetas']);
                })
        }
        $ctrl.seleccionarImagen = function (imagen) {
            imagenReceta = imagen;
        }

        $ctrl.deseleccionarImagen = function () {
            imagenReceta = null;
        }
    }
})();
