/*FUNCIONES FORMULARIO*/ 
$(document).ready(function () {
    $("#Formulario").submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '../js/contacto.js',
            data: $(this).serialize(),
            success: function (data) {
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Formulario').reset();
            }
        });

        return false;
    });
});

/*LIMPIAR FORMULARIO*/
function enviarmensaje() {
    window.alert("FORMULARIO ENVIADO");
    document.getElementById('Nombre').value = "";
    document.getElementById('Empresa').value = "";
    document.getElementById('Correo').value = "";
    document.getElementById('Mensaje').value = "";
    return false;

    /*addEventListener.*/
}
/*MOSTRAR DIV MOTIVO CUANDO CLICKAS EN 'OTRO'0*/
function mostrar() {

    var x = document.getElementById("motivo");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display="none";
    }
}
