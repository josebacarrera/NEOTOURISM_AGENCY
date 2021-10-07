/*imagenes de seleccion lugar*/
var select=['a','b','c','d'];
var imagen=['../img/a.jpg','../img/b.jpg','../img/c.jpg','../img/d.jpg'];

for (let index = 0; index < select.length; index++) {
    document.getElementById('seleccion').innerHTML 
    += '<div id="'+select[index]+'" class="img border border-2 rounded-3 border-primary m-auto my-5 d-block"><img class="w-100 h-100" src="'+imagen[index]+'"></div>';
}

/*tabs segun seleccion*/
document.addEventListener("DOMContentLoaded", function(){
    
    //funcion para 'borrar' entre selecciones    
        function borrar() {
            var tabs = document.querySelectorAll('.tabs');
            tabs.forEach(element => element.style.display = 'none');
        }//cierre borrar()
borrar();  
       
        /*a*/document.getElementById("a").addEventListener("click", function(){
            borrar();
            document.getElementById('idta').style.display='block';
    });//a cierre

        
        /*b*/document.getElementById("b").addEventListener("click", function(){
            borrar();
            document.getElementById('idtb').style.display='block';
        });//b cierre

    
        /*c*/document.getElementById("c").addEventListener("click", function(){
            borrar();
            document.getElementById('idtc').style.display='block';
        });//c cierre

        /*d*/document.getElementById("d").addEventListener("click", function(){
            borrar();
            document.getElementById('idtd').style.display='block';
        });//d cierre
  });//addEventListener("DOMContentLoaded"