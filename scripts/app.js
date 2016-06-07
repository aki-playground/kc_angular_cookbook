angular
    .module("cookbook", [
        'ngComponentRouter', // ComponentRouter (deprecated, esperando alternativa (160607)) 
        'dahr.ng-image-picker' // Image Picker de Vermicida
    ]);


// Config proveedor $locationProvider
// Modo de navegación HTML5 para que funcione el SPA

angular
    .module("cookbook")
    .config(function($locationProvider){
        // Establecer modo html5
        $locationProvider.html5Mode(true);
    });

angular
    .module('cookbook')
    .value('$routerRootComponent', 'app');