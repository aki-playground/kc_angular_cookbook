(function() {    
angular
    .module("cookbook")
    .controller("ListaRecetas", ListaRecetas);

    ListaRecetas.$inject = ['$scope', 'ServicioRecetas']

    function ListaRecetas($scope, ServicioRecetas) {
        
        // ServicioRecetas
        //     .obtenerRecetas()
        //     .then(function (response) {
        //         $scope.recetas = response.data;
        //     });

        $scope.guardarReceta = function (nombreReceta) {
            debugger;
            var receta = { nombre : nombreReceta }

            ServicioRecetas
                .guardarReceta(receta)
                .then(function (response) {
                    $scope.recetas.push(response.data)
                    $scope.nombreReceta = "";
                })
        }
    }


})();