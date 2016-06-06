(function() {
    angular
        .module('cookbook')
        .component('nuevaReceta', {
            templateUrl: 'views/nueva-receta.html',
            controller: nuevaReceta
        })
    nuevaReceta.$inject = ['ServicioRecetas'];
    function nuevaReceta (ServicioRecetas) {
        var ctrl = this;
        ctrl.guardarReceta = function (nombreReceta) {
            var receta = { nombre : nombreReceta }

            ServicioRecetas
                .guardarReceta(receta)
                .then(function (response) {
                    // ctrl.recetas.push(response.data)
                    // ctrl.nombreReceta = "";
                })
        }
    }
})();
