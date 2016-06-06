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

    
    }


})();