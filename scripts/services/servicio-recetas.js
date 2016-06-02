angular
    .module("cookbook")
    .service("ServicioRecetas", function () {
        var recetas = recetas = [
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
    })