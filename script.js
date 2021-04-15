function validardatos(){
    /* Comentario en un bloque de css*/

    //alert (Hola mundo);
    //prompt ("Ingrese su nombre")
    //console.log("Hola mundo")
    //document.write("HOLA MUNDO")

    /* El let no usa memoria a diferencia del var*/
    let nombre= document.getElementById ("name").value /* value es para confirmar la información a enviar*/

    let nombre = document.getElementById('name').value
    if(nombre=="Jennifer"){
        alert('Bienvenido')
    }else{
        alert('No eres bienvenido')
    }

    let nombre= document.getElementById ("email").value
    if(email=="fife_1301@hotmail.com"){
        alert('Bienvenido')
    }else{
        alert('Correo no valido')
    }

    let nombre= document.getElementById ("telefono").value
    if(telefono=="3213443315"){
        alert('Bienvenido')
    }else{
        alert('Teléfono no valido')
    }

    let nombre= document.getElementById ("edad").value  
    if(edad=="27"){
        alert('Bienvenido')
    }else{
        alert('Edad no valida')
    }
    

    
}