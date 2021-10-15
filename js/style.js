//BOTÓN SUSCRITO
function suscrito(evObject) {
    console.log("vdbda")
    evObject.preventDefault();
    var nombre = document.getElementById("correoo")
    console.log(nombre);
    if (nombre.value == null || nombre.value.length == 0) {
        alert("Escribe un correo,el campo no puede estar vacio");
         return false;
    }else
        window.alert("Recibirás todas la actualidad al correo electrónico asociado");{
        document.correo.submit();
    }
}