
import Empleado from "./Empleado";


export async function searchEmpleado(){

    let response = await fetch('http://localhost:8080/api/empleados', {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();
   
}

export async function removeEmpleado(id: string){

    let response = await fetch('http://localhost:8080/api/empleado/'+id, {
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
   
}


export async function saveEmpleado(empleado: Empleado){

    await fetch('http://localhost:8080/api/empleado', {
        "method": 'POST',
        "body": JSON.stringify(empleado),
        "headers": {
            "Content-Type": 'application/json'
        }
    })

   
}


export async function searchEmpleadoById(id: string){
 
    let response = await fetch('http://localhost:8080/api/empleado/'+id, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();
    
 }