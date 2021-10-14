/*imagenes de seleccion lugar*/
var select=['A','B','C','D'];
var imagen=['../img/a.jpg','../img/b.jpg','../img/c.jpg','../img/d.jpg'];
var imagenTag=['../img/avion.png','../img/hotel.png','../img/algo.png'];

/*tabs info A*/
var Acompañias=['Iberia','Qatar Airways','Emirates','Lufthansa'];
var Ahora=['04:45','20:35','13:45','02:00'];
var Aprecio=['200€','600€','150€','1300€'];

/*tabs info B*/
var Bcompañias=['Qatar Airways','Iberia','Lufthansa','Emirates'];
var Bhora=['06:55','22:05','03:15','06:40'];
var Bprecio=['900€','1200€','180€','3000€'];

/*tabs info C*/
var Ccompañias=['Emirates','Iberia','Qatar Airways','Lufthansa'];
var Chora=['20:05','06:35','17:55','22:00'];
var Cprecio=['220€','800€','1050€','130€'];

/*tabs info D*/
var Dcompañias=['Emirates','Lufthansa','Iberia','Qatar Airways'];
var Dhora=['18:08','14:00','16:05','06:03'];
var Dprecio=['800€','0€','1500€','5600€'];


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
        imagenSup.forEach(element => element.addEventListener('click', function () {
            console.log(element.id);
            nombreCompañia = element.id + 'compañias';
            console.log(nombreCompañia);
            for (let index = 0; index < nombreCompañia.length; index++) {
               console.log(nombreCompañia[index]);                
            }

        }));//cierre imagenSup foreach



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