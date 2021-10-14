/*ENVIAR FORMULARIO*/
function enviarform() {
    window.alert("FORMULARIO ENVIADO");
}
/*MOSTRAR DIV MOTIVO CUANDO CLICKAS EN 'OTRO'0*/
function mostrar() {

    var i = document.getElementById("motivo");
    if (i.style.display === "none"){
        i.style.display = "block";
    } else {
        i.style.display="none";
    }
}