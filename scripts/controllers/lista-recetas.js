(function() {    
angular
    .module("cookbook")
    .controller("ListaRecetas", ListaRecetas);

    ListaRecetas.$inject = ['$scope', 'ServicioRecetas']

    function ListaRecetas($scope, ServicioRecetas) {
        $scope.recetas = ServicioRecetas.obtenerRecetas();
    })
})();