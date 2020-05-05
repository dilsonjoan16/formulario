//validaciones
function validar(){
var nombre=document.getElementById("nombre").value;
var apellido=document.getElementById("apellido").value;
var documento=document.getElementById("documento").value;
var telefono=document.getElementById("telefono").value;
var correo=document.getElementById("correo").value;
var masculino=document.getElementById("masculino").value;
var femenino=document.getElementById("femenino").value;
var sinespecificar=document.getElementById("sinespecificar").value;



if(nombre === "" || apellido === "" || documento === "" || telefono === "" || correo === "" || masculino === "" || femenino === "" || sinespecificar === ""){
  alert("Todos los campos son obligatorios!");
  return false;
  }
else if(nombre.value==0){
  alert("Ingrese el nombre");
  return false;
  }
 else if(apellido.value==0){
  alert("Ingrese el apellido");
  return false;
  }
else if(documento.value==0){
  alert("Ingrese el documento");
  return false;
  }
else if(telefono.value==0){
  alert("Ingrese el telefono");
  return false;
  }
else if(correo.value==0){
  alert("Ingrese el correo");
  return false;
  }
else if(masculino.value==0){
  alert("Elija algun sexo entre los 3 sugeridos");
  return false;
  }
else if(femenino.value==0){
  alert("Elija algun sexo entre los 3 sugeridos");
  return false;
  }
else if(sinespecificar.value==0){
  alert("Elija algun sexo entre los 3 sugeridos");
  return false;
  }
else if(nombre.length>25){
alert("El nombre es muy largo");
return false;
  }
else if(apellido.length>25){
  alert("El apellido es muy largo");
  return false;
  }
else if(isNaN(telefono)){
  alert("El telefono ingresado no es un numero valido");
  return false;
  }
}

//botones
function guardar(){
  if(nombre.value == 0 || apellido.value == 0 || documento == 0 || telefono == 0 || correo == 0 || masculino == 0 || femenino == 0 || sinespecificar == 0){
  alert("Por favor complete todos los campos para guardar");
    }
  else if(nombre.value != 0 && apellido.value != 0 && documento.value != 0 && telefono.value != 0 && correo.value != 0 && masculino.value != 0 || femenino.value != 0 ||sinespecificar.value != 0){
  alert("Todos sus datos han sido guardados con exito!");  
    }
  }

function limpiar(){
  alert("El formulario se limpio Exitosamente!");

  nombre.value=null;
  apellido.value=null;
  documento.value=null;
  telefono.value=null;
  correo.value=null;
  masculino.value=null;
  femenino.value=null;
  sinespecificar.value=null;
  
}  