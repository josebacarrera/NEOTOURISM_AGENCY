$(document).ready(function(){
    $("#Formulario").submit(function( event ){
     event.preventDefault();

     $.ajax({
         type: 'POST',
         url: '../php/contacto2.php',
         data: $(this).serialize(),
         success: function(data){
             $("#respuesta").slideDown();
             $("#respuesta").html(data);
             $('#respuesta2').modal('show');
             document.getElementById('Formulario').reset();
         }
     });

     return false;
 });
});

function enviarmensaje() {
    window.alert("FORMULARIO ENVIADO");
}