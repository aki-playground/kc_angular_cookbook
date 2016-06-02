(function() {
angular
    .module("cookbook")
    .service("ServicioRecetas", ServicioRecetas)

    ServicioRecetas.$inject = ['$http'];

    function ServicioRecetas($http) {
       var recetas = [
            {
                nombre: "craear un controller"
            },
            { 
                nombre: "crear un service"
            },
            {
                nombre: "crear un factory"
            }
        ];
        var obtenerRecetas = function () {
            return recetas;
        }
        return {
            obtenerRecetas : obtenerRecetas
        }
    });
})();