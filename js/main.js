(function(){
  // Variables
  var lista = document.getElementById("lista"),
      tareaInput = document.getElementById("tareaInput"),
      btnTareaNueva = document.getElementById("btn-agregar");

  // Funciones
  var agregarTarea = function(){
      alert("Agregar Tarea");
  };

  var comprobarInput = function(){
      alert("Comprobar input");
  };

  var eliminarTarea = function() {
      alert("Eliminar Tarea");
  };

  //Eventos
    //Agregar Tarea
  btnTareaNueva.addEventListener("click", agregarTarea);

    //Comprobar input
  tareaInput = addEventListener("click", comprobarInput);

    //Borrar elementos de la lista
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
}());
