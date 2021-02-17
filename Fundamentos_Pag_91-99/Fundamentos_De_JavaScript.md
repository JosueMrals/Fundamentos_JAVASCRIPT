Javascript API

Javascript viene con una API enriquecida para hacer muchas cosas como:
Acceso al DOM (HTML nodes)
Realizar solicitudes HTTP
Reproducir videos y sonidos
Detectar acciones del usuario (Mover el mouse, Presionar una tecla)
Lanzar hilos
Accede a la GPU, Acceder a la imagen de la webcam, ...
Y la API sigue creciendo con cada nueva actualización del estándar.
Consulta la WEB API reference para saber mas

Javascript: Recuperando elemento

Puede obtener elementos del DOM (árbol HTML) utilizando diferentes enfoques.
Rastrear el árbol HTML (partiendo del cuerpo y atravesando a sus hijos)
Usar un selector (Como en CSS)
Adjuntar oyentes de eventos(llamar a funciones cuando se realizan algunas acciones)

Javascript: Recorriendo el DOM

Desde javascript tienes diferentes variables a las que puedes acceder para obtener información sobre el sitio web:
document: La información DOM (HTML)
window: La ventana del navegador
La variable document permite rastrear el árbol.:
document.body.children[0] // devuelve el primer nodo dentro de la etiqueta del cuerpo

Javascript: Usando selectores

Puedes recuperar elementos usando selectores:
var nodos = document.querySelectorAll("p.intro");
devolverá una matriz con todos los nodos <p class="intro"> en la web.
O si ya tenemos un nodo y queremos buscar dentro:
var nodo = minodo.querySelectorAll("p.intro")

Javascript: Modificar nodos

Desde JS puedes cambiar los atributos
minodo.id = "intro"; //Establecer un id
minodo.className = "importante"; //establecer una clase
minodo.classList.add(“bueno"); //para agregar a las clases actuales

Cambiar el contenido
minodo.innerHTML = "<p>Texto para mostrar</p>"; //cambiar el contenido

Modificar el estilo
minodo.style.color = "red"; //cambiar propiedades css

O agregar el comportamiento de un nodo
minodo.addEventListener("click", function(e) {
	//hacer algo
});

Javascript: Crear nodos

Crear elementos:
var elemento = document.createElement("div");
Y adjuntarlos al DOM:
document.querySelector("#main").appendChild(elemento);
O eliminarlo de su contenedor padre:
var elemento = document.querySelector("foo");
elemento.parentNode.removeChild( elemento );

Usando inputs

Si desea que el usuario pueda ingresar algún texto, usamos la etiqueta <input>:
<input type="text"/>
Hay otras entradas, puedes chequear esta lista.
Desde Javascript podemos adjuntar eventos como "click" o "keydown".
Leer o modificar el contenido de la entrada:
Mi_elemento_entrada.value = ""; //esto borrará el texto dentro de la entrada

Javascript: Crear nodos

Crear elementos:
var elemento = document.createElement("div");
Y adjuntarlos al DOM:
document.querySelector("#main").appendChild(elemento);
O eliminarlo de su contenedor padre:
var elemento = document.querySelector("foo");
elemento.parentNode.removeChild( elemento );
