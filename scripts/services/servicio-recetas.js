(function() {
angular
    .module("cookbook")
    .service("ServicioRecetas", ServicioRecetas)

    ServicioRecetas.$inject = ['$http'];

    function ServicioRecetas($http) {


       // var recetas = [
       //      {
       //          nombre: "craear un controller"
       //      },
       //      { 
       //          nombre: "crear un service"
       //      },
       //      {
       //          nombre: "crear un factory"
       //      }
       //  ];
        var obtenerRecetas = function () {
            return $http.get("http://127.0.0.1:8000/api/recetas");
        }

        var guardarReceta = function (receta) {
          return $http.post("http://127.0.0.1:8000/api/recetas", receta);
        }

        var eliminarReceta = function (id) {
          return $http.delete("http://127.0.0.1:8000/api/recetas/" + id);
        }

        return {
            obtenerRecetas : obtenerRecetas,
            guardarReceta : guardarReceta,
            eliminarReceta : eliminarReceta
        }
    }
})();