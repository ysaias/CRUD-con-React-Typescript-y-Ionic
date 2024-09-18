import Cliente from "./Cliente";


export async function searchCliente(){

    let response = await fetch( 'http://localhost:8080/api/customers', {

        'method': 'GET',
        'headers': {
            'Content-Type': 'application/jason' 
        }
    })

    return await response.json();
    
}

export async function removeCliente(id: string){

    await fetch( 'http://localhost:8080/api/customer/'+id, {

        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/jason' 
        }
    })
   
}


export async function saveCliente(cliente: Cliente){

    
    await fetch('http://localhost:8080/api/customer', {
        "method": 'POST',
        "body": JSON.stringify(cliente),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
   
   
}


export async function searchClienteById(id: string){
    let response = await fetch( 'http://localhost:8080/api/customer/'+id, {

        'method': 'GET',
        'headers': {
            'Content-Type': 'application/jason' 
        }
    })

    return await response.json();
     
 }