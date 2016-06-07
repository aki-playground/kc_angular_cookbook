(function() {
angular
    .module("cookbook")
    .service("ServicioRecetas", ServicioRecetas)

    ServicioRecetas.$inject = ['$http'];

    function ServicioRecetas($http) {
        var obtenerRecetas = function () {
            return $http.get("http://127.0.0.1:8000/api/recetas");
        }

        var guardarReceta = function (receta, imagen) {
          console.log(imagen);
          var promesa;
          if (imagen) {
            // Montamos un 'FormData' con la imagen a subir
            var formData = new FormData()
            formData.append('img', imagen)

            // Es necesario marcar 'Conten-Type' undefined
            //  para que AngularJS infiera su tipo real
            var config = {
              'headers' : {
                'Content-Type' : undefined
              }
            }

            // Subimos imagen a servidor
            promesa = $http.post(
                'http://127.0.0.1:8000/upload',
                formData,
                config
            ).then(function (response) {
              // En la propiedad path del response viene 
              //  la ruta relativa de la imagen subida
              
              // Establecemos ruta imagen en el obejto receta
              receta.rutaImagen = response.data.path;

              // Subimos la receta con el path de la imaten
              return $http.post("http://127.0.0.1:8000/api/recetas", receta)
            })

          } else {
            promesa = $http.post("http://127.0.0.1:8000/api/recetas", receta)
          }
          return promesa;
        }

        var eliminarReceta = function (id) {
          return $http.delete("http://127.0.0.1:8000/api/recetas/" + id);
        }

        var obtenerRutaImagenAbsoluta = function (rutaRelativa) {
          return rutaRelativa ? 
            ('http://127.0.0.1:8000/' + rutaRelativa)
            : null
        }
        return {
            obtenerRecetas : obtenerRecetas,
            guardarReceta : guardarReceta,
            eliminarReceta : eliminarReceta,
            obtenerRutaImagenAbsoluta : obtenerRutaImagenAbsoluta
        }
    }
})();