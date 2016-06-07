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
            $ctrl.cargarRecetas();
        }
        $ctrl.cargarRecetas  = function () {
            ServicioRecetas
                .obtenerRecetas()
                .then(function (response) {
                    $ctrl.recetas = response.data;
                });
        }
        $ctrl.eliminar = function (id) {
            console.log("1");
            ServicioRecetas
                .eliminarReceta(id)
                .then(function (response) {
                    console.log(response)
                    $ctrl.cargarRecetas();
                })
        }
        
    }

    
})();