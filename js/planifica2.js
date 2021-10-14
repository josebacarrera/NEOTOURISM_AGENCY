/*imagenes de seleccion lugar*/
var select=['A','B','C','D'];
var imagen=['../img/a.jpg','../img/b.jpg','../img/c.jpg','../img/d.jpg'];

/*info tabs*/

vuelos=[['NeoTokyo2D','Iberia','04:45','200€'],['NeoTokyo2D','Qatar Airways','20:35','600€'],['NeoTokyo2D','Emirates','13:45','150€'],['NeoTokyo2D','Lufthansa','02:00','1300€'],[
    'Akira','Qatar Airways','06:55','900€'],['Akira','Iberia','22:05','1200€'],['Akira','Lufthansa','03:15','180€'],['Akira','Emirates','06:40','3000€'],[
    'CyberPunk','Emirates','20:05','220€'],['CyberPunk','Iberia','06:35','800€'],['CyberPunk','Qatar Airways','17:55','1050€'],['CyberPunk','Lufthansa','22:00','130€'],[
    'Doraemon','Emirates','18:08','800€'],['Doraemon','Lufthansa','14:00','0€'],['Doraemon','Iberia','16:05','1500€'],['Doraemon','Qatar Airways','06:03','5600€']]

hoteles=[['Hotel Grizzly','05:45','300€'],['Feliz estancia','21:35','700€'],['Hotel Spotlight','14:45','250€'],['Confort Total','03:00','1400€'],[
    'Feliz estancia','07:55','910€'],['Hotel Grizzly','23:05','1300€'],['Confort Total','04:15','190€'],['Hotel Spotlight','07:40','4000€'],[
    'Hotel Spotlight','22:05','240€'],['Hotel Grizzly','05:35','200€'],['Feliz estancia','16:55','1350€'],['Confort Total','23:00','140€'],[
    'Hotel Spotlight','19:08','300€'],['Confort Total','13:00','11110€'],['Hotel Grizzly','15:05','100€'],['Feliz estancia','04:03','560€']]

for (let index = 0; index < select.length; index++) {
    document.getElementById('seleccion').innerHTML 
    += '<div id="'+select[index]+'" class="img img-sitio border border-2 rounded-3 border-primary m-auto my-5 d-block"><img class="w-100 h-100" src="'+imagen[index]+'"></div>';
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
           imagenSup(index).addEventListener('click', function(){sacarDatosGeneral(i)});            
        }
/****************************************************************************************************************************************************************************************** */
            
miArray="vuelos";
resul=eval(miArray);
  

 function sacarDatosGeneral(indice) {
     miArray="";
           if(indice==0){
                miArray="vuelos";
         }else{
                miArray="hoteles";
         }
     resul=eval(miArray)
     console.log(resul)
     sacarDestino(destino,resul)   
     

 } 

function sacarDestino(destino,resul){
       lista="";
       elementoLista="";
       for(i=0;i<resul.length;i++){
          destino=destino.trim();
         if((destino=="NeoTokyo2D") || (destino==resul[i][0])){
             console.log(resul[i][0]+"-"+destino)
             elementoLista="<p>"+ resul[i][0]+"-"+resul[i][1]+"-"+resul[i][2]+"-"+resul[i][3]+"-"+"</p>";
             lista=lista+elementoLista;
          }
        }
     document.querySelector('#vuelosHoteles').innerHTML=lista;
  }
  

/******************************************************************************************************************************************************************************************* */
        /*document.getElementById("a").addEventListener("click", function(){
            borrar();
            document.getElementById('idta').style.display='block';
            document.getElementsByClassName('tab').innerHTML
            +='<div class="entrada impar"> <h3 class="compañia w-100 mx-5">Vueling</h3> <h3 class="hora w-50">2h</h3>  <h3 class="precio w-25">300€</h3> <button class="btnS">Comprar</button> </div>';
        });//a cierre

        
        document.getElementById("b").addEventListener("click", function(){
            borrar();
            document.getElementById('idtb').style.display='block';
        });//b cierre

    
        /document.getElementById("c").addEventListener("click", function(){
            borrar();
            document.getElementById('idtc').style.display='block';
        });//c cierre

        document.getElementById("d").addEventListener("click", function(){
            borrar();
            document.getElementById('idtd').style.display='block';
        });//d cierre  */ 
  });//addEventListener("DOMContentLoaded"