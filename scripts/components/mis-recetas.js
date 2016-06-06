(function() {
    angular
        .module("cookbook")
        .component("misRecetas", {
            templateUrl: "views/mis-recetas.html", 
            controller : misRecetas
        });

    misRecetas.$inject = ['ServicioRecetas']
    
    function misRecetas(ServicioRecetas){
        var self = this;
        
        ServicioRecetas
            .obtenerRecetas()
            .then(function (response) {
                self.recetas = response.data;
            });
    }

    
})();