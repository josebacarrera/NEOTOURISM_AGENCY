//ENVIAR FORMULARIO
function enviarform() {
    window.alert("FORMULARIO ENVIADO");
}
//MOSTRAR DIV MOTIVO CUANDO CLICKAS EN 'OTRO...'
function mostrar() {

    var valor = document.getElementById("MotivoS").value;

    if (valor == "Otro") {
        document.getElementById("motivo").style.display = 'block';
    }else{
        document.getElementById("motivo").style.display = 'none';
    }
}
