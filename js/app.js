import { guardar, recuperar } from "./auxiliar.js";


const btnGuardar = document.querySelector("[data-nombre='btn-guardar']");
const textoTarea = document.querySelector("input[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");
const btnlimpiar = document.querySelector("#btn-limpiar");
let btnsEliminar = []

let historicoTareas = recuperar("estados") ?? [];

btnGuardar.addEventListener("click", function(evento){
console.log(textoTarea.value);
historicoTareas.push(textoTarea.value)

const tarea = `<li class="flex justify-between items-center">
<span> ${textoTarea.value} </span> 
<button class="bg-red-600 px-3 rounded-lg eliminar">x</button>
</li>`
listadoTareas.insertAdjacentHTML("beforeend", tarea);

guardar("estados", historicoTareas)

});

btnlimpiar.addEventListener("click", function(evento){
    Swal.fire({
      title: "¿Quieres eliminar las tareas?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#65a30d",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Quiero eliminar!"
    }).then(function(objeto) {
        if (!objeto.isConfirmed) {
            return Swal.fire({
                title: "No eliminado!",
                text: "Se mantuvieron los datos.",
                icon: "error"
            });
        }
        listadoTareas.innerHTML = "";
        guardar("estados", []);
        Swal.fire({
            title: "Eliminado!",
            text: "Las tareas fueron eliminadas.",
            icon: "success"
        });
    });
});

function recuperarTodo() {
   const mostrar = historicoTareas.map(
        function (elemento) {
            return `<li class="flex justify-between items-center">
                    <span>${elemento}</span> 
                    <button class="bg-red-600 px-3 rounded-lg eliminar">x</button>
                    </li>`
        }
    )
    listadoTareas.insertAdjacentHTML("beforeend", mostrar.join(""))
}

listadoTareas.addEventListener("click", function(evento){
    /*Agrego como delegación de eventos:
      llego al hijo a través del padre (ul, elemento HTML)
    */
    console.log("evento: ", evento.target);

    if (evento.target.tagName == "BUTTON") {
        const texto = evento.target.closest("li").querySelector("span").textContent
        evento.target.closest("li").remove()
        historicoTareas = historicoTareas.filter(function(tarea){
            return tarea != texto
        })
    }

    guardar("estados",historicoTareas)

    if (evento.target.tagName == "SPAN") {
        alert(evento.target.textContent)
    }

    });



recuperarTodo();





/*console.log(btnsEliminar);

setInterval(
    function() {
            btnsEliminar = document.querySelectorAll(".eliminar");
            btnsEliminar.forEach(
                function(elemento){
                 elemento.addEventListener("click", function(evento){
                 evento.target.closest("li").outerHTML = ""
               });
           }
        )
    
    }
, 3000);*/