function validate()
{
    var name = $("#mostrar").val();
    var email = $("#email").val();
    
    /*var name = document.getElementById("mostrar").value;
    var email =document.getElementById("email").value;*/
    var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
     if((/[0-9]/g).test(name))
        {
            alert("Ingresa un Nombre Válido");
            
        }else{
            location.href="singup.html";
        };
    
     if(!correo.test(email))
        {
            alert("Ingresa un Email correcto");
            
        }else{
            location.href="singup.html";
        };
 
}

