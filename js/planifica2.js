/*imagenes de seleccion lugar*/
var select=['1','2','3','4'];
var imagen=['../img/a.jpg','../img/b.jpg','../img/c.jpg','../img/d.jpg'];

/*info tabs*/

vuelos=[[0,'NeoTokyo2D','Iberia','04:45','200€'],[0,'NeoTokyo2D','Qatar Airways','20:35','600€'],[0,'NeoTokyo2D','Emirates','13:45','150€'],[0,'NeoTokyo2D','Lufthansa','02:00','1300€'],[
    1,'Akira','Qatar Airways','06:55','900€'],[1,'Akira','Iberia','22:05','1200€'],[1,'Akira','Lufthansa','03:15','180€'],[1,'Akira','Emirates','06:40','3000€'],[
    2,'CyberPunk','Emirates','20:05','220€'],[2,'CyberPunk','Iberia','06:35','800€'],[2,'CyberPunk','Qatar Airways','17:55','1050€'],[2,'CyberPunk','Lufthansa','22:00','130€'],[
    3,'Doraemon','Emirates','18:08','800€'],[3,'Doraemon','Lufthansa','14:00','0€'],[3,'Doraemon','Iberia','16:05','1500€'],[3,'Doraemon','Qatar Airways','06:03','5600€']]

hoteles=[[0,'hotel0','Hotel Grizzly','05:45','300€'],[0,'hotel0','Feliz estancia','21:35','700€'],[0,'hotel0','Hotel Spotlight','14:45','250€'],[0,'hotel0','Confort Total','03:00','1400€'],[
    1,'hotel1','Feliz estancia','07:55','910€'],[1,'hotel1','Hotel Grizzly','23:05','1300€'],[1,'hotel1','Confort Total','04:15','190€'],[1,'hotel1','Hotel Spotlight','07:40','4000€'],[
    2,'hotel2','Hotel Spotlight','22:05','240€'],[2,'hotel2','Hotel Grizzly','05:35','200€'],[2,'hotel2','Feliz estancia','16:55','1350€'],[2,'hotel2','Confort Total','23:00','140€'],[
    3,'hotel3','Hotel Spotlight','19:08','300€'],[3,'hotel3','Confort Total','13:00','11110€'],[3,'hotel3','Hotel Grizzly','15:05','100€'],[3,'hotel3','Feliz estancia','04:03','560€']]

actividades=[[0,'actividad0','actividad Grizzly','05:45','300€'],[0,'actividad0','Feliz estancia','21:35','700€'],[0,'actividad0','actividad Spotlight','14:45','250€'],[0,'actividad0','Confort Total','03:00','1400€'],[
    1,'actividad1','Feliz estancia','07:55','910€'],[1,'actividad1','actividad Grizzly','23:05','1300€'],[1,'actividad1','Confort Total','04:15','190€'],[1,'actividad1','actividad Spotlight','07:40','4000€'],[
    2,'actividad2','actividad Spotlight','22:05','240€'],[2,'actividad2','actividad Grizzly','05:35','200€'],[2,'actividad2','Feliz estancia','16:55','1350€'],[2,'actividad2','Confort Total','23:00','140€'],[
    3,'actividad3','actividad Spotlight','19:08','300€'],[3,'actividad3','Confort Total','13:00','11110€'],[3,'actividad3','actividad Grizzly','15:05','100€'],[3,'actividad3','Feliz estancia','04:03','560€']]


for (let index = 0; index < select.length; index++) {
    document.getElementById('seleccion').innerHTML 
    += '<div id="'+select[index]+'" class="bg-image hover-zoom img img-sitio border border-2 rounded-3 border-primary m-auto my-5 d-block "><img class="w-100 h-100" src="'+imagen[index]+'"></div>';
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
                        
        }



 function sacarDatosGeneral(index) {
    borrar();
    
    document.getElementById("idt").style.display = "block";
    document.getElementById("avion").addEventListener("click", function () {generarInfo("0", index)});
    document.getElementById("hotel").addEventListener("click", function () {generarInfo("1", index)});
    document.getElementById("actividades").addEventListener("click", function () {generarInfo("2", index)});
     
 }
 
function generarInfo(info, index){
    console.log(info + " " + index + "aaaaaaaa")
    document.getElementById("autoGen").style.display = "block";
    document.getElementById("autoGen").innerHTML = "";
 
        //vuelos.forEach(element => {
        miArray="";
        
           if(info==0){
                miArray="vuelos";
         }else if(info==1) {
                miArray="hoteles";
         } else {
            miArray="actividades";
         }

        resul=eval(miArray)
       // })


     
        for(i=0;i<resul.length;i++){
            if((index==resul[i][0])){
                document.getElementById("autoGen").innerHTML += "<div class='entrada impar'>"
                                                             +  "<h3 class='compañia w-100 mx-5'>"+resul[i][2]+"</h3>"
                                                             +  "<h3 class='hora w-50'>"+resul[i][3]+"</h3>"
                                                             +  "<h3 class='precio w-25'>"+resul[i][4]+"</h3>"
                                                             +  "<button class='btnS'>Comprar</button></div>"
            }
        }
 
 }//CIERRE AUTOGEN TODO

});//addEventListener("DOMContentLoaded"