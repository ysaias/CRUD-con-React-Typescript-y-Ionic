import Proveedor from "./Proveedor";


export async function searchProveedor(){

    let response = await fetch('http://localhost:8080/api/proveedores', {
        "method" : 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();

   /* Este codigo solo sirve para pruebas en localStorage
   
   if(!localStorage['proveedores']){
        localStorage['proveedores'] = '[]';
    }

    let proveedores = localStorage['proveedores'];
    proveedores = JSON.parse(proveedores);
    return proveedores; */
}

export async function removeProveedor(id: string){

    await fetch('http://localhost:8080/api/proveedor/'+id, {
        "method" : 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })


    /* Este codigo solo sirve para pruebas en localStorage 
    
    let proveedores = searchProveedor();
    let indice = proveedores.findIndex((proveedor:Proveedor) => proveedor.id == id);
    proveedores.splice(indice, 1);
   localStorage['proveedores'] = JSON.stringify(proveedores); */
}


export async function saveProveedor(proveedor: Proveedor){

    await fetch('http://localhost:8080/api/proveedor', {
        "method" : 'POST',
        "body": JSON.stringify(proveedor),
        "headers": {
            "Content-Type": 'application/json'
        }
    })



   /* Este codigo solo sirve para pruebas en localStorage
   
   let proveedores = searchProveedor();
    if(proveedor.id){     
        let indice = proveedores.findIndex((c:Proveedor) => c.id == proveedor.id);
        proveedores[indice] = proveedor;
    }else{
        proveedor.id = String(Math.round(Math.random() * 10000));
        proveedores.push(proveedor); 
    }
   localStorage['proveedores'] = JSON.stringify(proveedores); */

}


export async function searchProveedorById(id: string){

    let response = await fetch('http://localhost:8080/api/proveedor/'+id, {
        "method" : 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();
    
    /* Este codigo solo sirve para pruebas en localStorage 
    
    let proveedores = searchProveedor();
    return proveedores.find((c: Proveedor) => c.id == id);   */
 }