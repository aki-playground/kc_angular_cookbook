(function() {
    angular
        .module('cookbook')
        .component("app", {
            $routeConfig: [
                {
                    name:  'MisRecetas',
                    path: '/mis-recetas',
                    component: 'misRecetas'
                },
                {
                    name: 'NuevaReceta',
                    path: '/nueva-receta',
                    component: 'nuevaReceta'
                }
            ],
            templateUrl : 'views/app.html'
        })
})();