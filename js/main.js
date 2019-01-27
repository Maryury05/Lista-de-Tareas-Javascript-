(function(){
  // Variables
  var lista = document.getElementById("lista"),
      tareaInput = document.getElementById("tareaInput"),
      btnTareaNueva = document.getElementById("btn-agregar");

  // Funciones
  var agregarTarea = function(){
      var tarea = tareaInput.value,
        nuevaTarea =  document.createElement("li"),
        enlance = document.createElement("a"),
        contenido = document.createTextNode(tarea);

      if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega un tarea valida");
        tareaInput.className = "error";
        return false;
      }

      //Agregamos el contenido a un enlace
      enlance.appendChild(contenido);

      // Le establecemos un atributo href
      enlance.setAttribute("href", "#");

      //Agregar el enlace a la nueva tarea
      nuevaTarea.appendChild(enlance);

      // Agregamos el elemento a la lista
      lista.appendChild(nuevaTarea);

      tareaInput.value = "";

    for (var i = 0; i <= lista.children.length -1; i++) {
      lista.children[i].addEventListener("click", function(){
          this.parentNode.removeChild(this);
      });
    }
  };

  var comprobarInput = function(){
    tareaInput.className = "form-control";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };

  var eliminarTarea = function(){
    this.parentNode.removeChild(this);
  };

  //Eventos
    //Agregar Tarea
  btnTareaNueva.addEventListener("click", agregarTarea);

    //Comprobar input
  tareaInput.addEventListener("click", comprobarInput);

    //Borrar elementos de la lista
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
}());
