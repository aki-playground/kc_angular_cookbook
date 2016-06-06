(function() {
    angular
        .module("cookbook")
        .component("misRecetas", {
            templateUrl: "views/mis-recetas.html", 
            controller : misRecetas
        });

    misRecetas.$inject = ['ServicioRecetas']
    
    function misRecetas(ServicioRecetas){
        var $ctrl = this;

        $ctrl.$onInit = function () {
            ServicioRecetas
                .obtenerRecetas()
                .then(function (response) {
                    $ctrl.recetas = response.data;
                });
        }
        
    }

    
})();