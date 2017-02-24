function init()
{
    var seleccion = $("#flag-selected");
    var codigoPais = $("#codigo");
    var mostrarCod = $("#mostrar");
    
    var miRuta = localStorage.getItem("imgRuta");
    var miCodigo = localStorage.getItem("imgCodigo");
  
    
    seleccion.src=miRuta;
    mostrarCod.value=miCodigo;
   
    mostrarCod.focus();
    
    
}