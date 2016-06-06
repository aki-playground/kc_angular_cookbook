(function() {
    var app = angular.module("cookbook")
    

    app.directive("formularioAlta", formularioAlta);
    formularioAlta.$inject = [];
    function formularioAlta () {
        return {
            // restrict: E -> como atributo de elemento html. A -> como elemnto html
            restrict: 'EA',
            // template: html que va a renderizar el componente
            // template : "",

            //templateUrl: lo mismo que template pero un html que podemos poner en un fichero externo
            templateUrl : 'scripts/views/formulario-alta.html',

            // scope: definimos la interfaz de comunicación entre la directiva y el scope padre
            scope : {
                alHacerClick: "&"
                
            },
            // link: establecemos la lógica de la directiva y podemos manipular DOM
            link: function (scope) {

                // Gestiona botón Aceptar
                scope.notificarTexto = function () {
                    scope.alHacerClick({
                        texto : scope.texto
                    })
                }
            }
        }
    }
})();