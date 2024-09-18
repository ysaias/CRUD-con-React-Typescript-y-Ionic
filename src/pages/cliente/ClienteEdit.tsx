import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveCliente, searchClienteById } from './ClienteApi';
import Cliente from './Cliente';


const ClienteEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [cliente, setCliente] = useState<Cliente>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/folder/cliente/:id");
  const id = routeMatch?.params?.id;
  
    useEffect( () =>{
        search();
    }, []);

  const search = async () =>{

    if(id === 'new'){
      
      setCliente({});
      
    }else{
     
      let result = await searchClienteById(id);
      setCliente(result);

    }
        
  }

  const save = async () =>{

    await saveCliente(cliente);
    history.push('/folder/clientes');

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
            <IonTitle className='tituloEncabezado'>{id=== 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>
        
       
        
        <IonRow>
          <IonCol> 
            <IonInput label="Nombre" labelPlacement="floating" 
                      fill="outline" placeholder="Nombre" 
                      onIonChange={e => cliente.nombre = String(e.detail.value)} value={cliente.nombre}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Apellido" labelPlacement="floating" 
                      fill="outline" placeholder="Apellido" 
                      onIonChange={e => cliente.apellido = String(e.detail.value)} value={cliente.apellido}></IonInput>
          </IonCol>
        </IonRow>
      
        <IonRow>
          <IonCol>
            <IonInput label="Email" labelPlacement="floating" 
                      fill="outline" placeholder="Email" 
                      onIonChange={e => cliente.correo = String(e.detail.value)} value={cliente.correo}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Telélfono" labelPlacement="floating" 
                      fill="outline" placeholder="Teléfono" 
                      onIonChange={e => cliente.telefono = String(e.detail.value)} value={cliente.telefono}></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput label="Dirección" labelPlacement="floating" 
                      fill="outline" placeholder="Dirección"  
                      onIonChange={e => cliente.direccion = String(e.detail.value)} value={cliente.direccion}></IonInput>
          </IonCol>
          <IonCol></IonCol>    
        </IonRow>
       
      
       <IonItem>
            <IonButton onClick={save} color="primary" fill="solid" slot='end' size='default'>
              <IonIcon icon={checkmark} /> GUARDAR
            </IonButton>
        </IonItem>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default ClienteEdit;
