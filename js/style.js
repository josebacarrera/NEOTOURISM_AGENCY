//BOTÓN SUSCRITO
function suscrito(evObject) {
    evObject.preventDefault();
    var nombre = document.getElementById("correoo")
    if (nombre.value == null || nombre.value.length == 0) {
        alert("Escribe un correo,el campo no puede estar vacio");
         return false;
    }else
        window.alert("Recibirás todas la actualidad al correo electrónico asociado");{
        document.correo.submit();
    }
}