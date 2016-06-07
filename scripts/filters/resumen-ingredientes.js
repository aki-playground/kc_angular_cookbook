(function() {
    angular
        .module('cookbook')
        .filter('ResumenIngredientes', ResumenIngredientes);

        ResumenIngredientes.$inject = [];

        function ResumenIngredientes () {
            // Debemos devolver la función de filtro
            return function (ingredientes) {
                // recorre la lista ingredientes para confeccionar texto resumen
                if (ingredientes) {
                    return ingredientes.reduce(function (acumulado, ingrediente) {
                        var texto = ingrediente.nombre + " (" + ingrediente.cantidad + "gr.) ";
                        acumulado.push(texto);
                        return acumulado;
                    }, []).join(", ")
                } else {
                    return "";
                }
                
            }
        }
})();