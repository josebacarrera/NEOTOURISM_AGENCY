/*imagenes de seleccion lugar*/
var select=['1','2','3','4'];
var imagen=['../img/a.jpg','../img/b.jpg','../img/c.jpg','../img/d.jpg'];

/*info tabs*/

vuelos=[['NeoTokyo2D','Iberia','04:45','200€'],['NeoTokyo2D','Qatar Airways','20:35','600€'],['NeoTokyo2D','Emirates','13:45','150€'],['NeoTokyo2D','Lufthansa','02:00','1300€'],[
    'Akira','Qatar Airways','06:55','900€'],['Akira','Iberia','22:05','1200€'],['Akira','Lufthansa','03:15','180€'],['Akira','Emirates','06:40','3000€'],[
    'CyberPunk','Emirates','20:05','220€'],['CyberPunk','Iberia','06:35','800€'],['CyberPunk','Qatar Airways','17:55','1050€'],['CyberPunk','Lufthansa','22:00','130€'],[
    'Doraemon','Emirates','18:08','800€'],['Doraemon','Lufthansa','14:00','0€'],['Doraemon','Iberia','16:05','1500€'],['Doraemon','Qatar Airways','06:03','5600€']]

hoteles=[['hotel0','Hotel Grizzly','05:45','300€'],['hotel0','Feliz estancia','21:35','700€'],['hotel0','Hotel Spotlight','14:45','250€'],['hotel0','Confort Total','03:00','1400€'],[
    'hotel1','Feliz estancia','07:55','910€'],['hotel1','Hotel Grizzly','23:05','1300€'],['hotel1','Confort Total','04:15','190€'],['hotel1','Hotel Spotlight','07:40','4000€'],[
    'hotel2','Hotel Spotlight','22:05','240€'],['hotel2','Hotel Grizzly','05:35','200€'],['hotel2','Feliz estancia','16:55','1350€'],['hotel2','Confort Total','23:00','140€'],[
    'hotel3','Hotel Spotlight','19:08','300€'],['hotel3','Confort Total','13:00','11110€'],['hotel3','Hotel Grizzly','15:05','100€'],['hotel3','Feliz estancia','04:03','560€']]

actividades=[['actividad0','actividad Grizzly','05:45','300€'],['actividad0','Feliz estancia','21:35','700€'],['actividad0','actividad Spotlight','14:45','250€'],['actividad0','Confort Total','03:00','1400€'],[
    'actividad1','Feliz estancia','07:55','910€'],['actividad1','actividad Grizzly','23:05','1300€'],['actividad1','Confort Total','04:15','190€'],['actividad1','actividad Spotlight','07:40','4000€'],[
    'actividad2','actividad Spotlight','22:05','240€'],['actividad2','actividad Grizzly','05:35','200€'],['actividad2','Feliz estancia','16:55','1350€'],['actividad2','Confort Total','23:00','140€'],[
    'actividad3','actividad Spotlight','19:08','300€'],['actividad3','Confort Total','13:00','11110€'],['actividad3','actividad Grizzly','15:05','100€'],['actividad3','Feliz estancia','04:03','560€']]


for (let index = 0; index < select.length; index++) {
    document.getElementById('seleccion').innerHTML 
    += '<div id="'+select[index]+'" class="bg-image hover-zoom img img-sitio border border-2 rounded-3 border-primary m-auto my-5 d-block "><h2>'+vuelos[0]+'</h2><img class="w-100 h-100" src="'+imagen[index]+'"></div>';
}

/*tabs segun seleccion*/
document.addEventListener("DOMContentLoaded", function(){
    
    //funcion para 'borrar' entre selecciones    
        function borrar() {
            var tabs = document.querySelectorAll('.tabs');
            tabs.forEach(element => element.style.display = 'none');
        }//cierre borrar()
borrar();  
       
        imagenSup=document.querySelectorAll('.img-sitio');
        //imagenSup.forEach(element => element.addEventListener('click', function () {}));//cierre imagenSup foreach
          
        for (let index = 0; index < imagenSup.length; index++) {
           imagenSup[index].addEventListener('click', function(){sacarDatosGeneral(index)});
           console.log(index);               
        }
       
miArray="vuelos";
resul=eval(miArray);
console.log(resul);

 function sacarDatosGeneral(index) {

    borrar();
    document.getElementById("idt" + index).style.display = "block";
    document.getElementById("tabuno" + index).addEventListener("click", function () {generarInfo("1", index)});
    document.getElementById("tabdos" + index).addEventListener("click", function () {generarInfo("2", index)});
    document.getElementById("tabtres" + index).addEventListener("click", function () {generarInfo("3", index)});
     
 }
 
function generarInfo(info, index){
    document.getElementById("autoGen").style.display = "block";
    document.getElementById("autoGen").innerHTML = "";

    if (info == 1) { //Vuelos

        vuelos.forEach(element => {
            
            if (index == 0 && element[0] == "NeoTokyo2D") { //Datos del idt0

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 1 && element[0] == "Akira") { //Datos del idt1

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 2 && element[0] == "CyberPunk") { //Datos del idt2

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 3 && element[0] == "Doraemon") { //Datos del idt3

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }
        });

    }//cierre vuelo autogen

    if (info == 2) { //Hoteles
        hoteles.forEach(element => {
            
            if (index == 0 && element[0] == "hotel0") { //Datos del idt0

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 1 && element[0] == "hotel1") { //Datos del idt1

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 2 && element[0] == "hotel2") { //Datos del idt2

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 3 && element[0] == "hotel3") { //Datos del idt3

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }
        });
    }//cierre autogen hoteles

    if (info == 3) { //Actividades
        actividades.forEach(element => {
            
            if (index == 0 && element[0] == "actividad0") { //Datos del idt0

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 1 && element[0] == "actividad1") { //Datos del idt1

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 2 && element[0] == "actividad2") { //Datos del idt2

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }

            if (index == 3 && element[0] == "actividad3") { //Datos del idt3

                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+element[1]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+element[2]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+element[3]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }
        });
    }//cierre autogen hoteles

 }//CIERRE AUTOGEN TODO

});//addEventListener("DOMContentLoaded"