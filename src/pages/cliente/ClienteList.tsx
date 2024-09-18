import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCliente, searchCliente } from './ClienteApi';
import Cliente from './Cliente';


const ClienteList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clinetes, setClientes] = useState<Cliente[]>([]);
  const history = useHistory();


    useEffect( () =>{
        search();
    }, [history.location.pathname]);


  const search = async () =>{
        let result = await searchCliente();
        setClientes(result);
  }



  const remove = async (id: string) =>{
    await removeCliente(id);
    search();
  }

  const agregarCliente = () =>{
    history.push('cliente/new');
  }

  const editCliente = (id:string) =>{
    history.push('cliente/'+ id);
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
            <IonTitle>Gestion de Clientes</IonTitle>
        
        <IonItem>
            <IonButton onClick={agregarCliente} color="primary" fill="solid" slot='end' size='default'>
              <IonIcon icon={add} />  AGREGAR CLIENTE
            </IonButton>
        </IonItem>
        
        <IonGrid className='table'>
  
        <IonRow>
          <IonCol>Nombre </IonCol>
          <IonCol>Email</IonCol>
          <IonCol>Teléfono</IonCol>
          <IonCol>Dirección</IonCol>
          <IonCol>Acciones</IonCol>
        </IonRow>

        {clinetes.map((cliente:Cliente)=> 
        
        <IonRow>
          <IonCol>{cliente.nombre} {cliente.apellido}</IonCol>
          <IonCol>{cliente.correo}</IonCol>
          <IonCol>{cliente.telefono}</IonCol>
          <IonCol>{cliente.direccion}</IonCol>
          <IonCol>
            <IonButton color="primary" fill='clear'
              onClick={() => editCliente(String(cliente.id))}>
                <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
            <IonButton  color="danger" fill='clear'
              onClick={() => remove(String(cliente.id))}>
                <IonIcon icon={close} slot='icon-only'/>
            </IonButton>
          </IonCol>
        </IonRow>
        )}
        
        </IonGrid>
        </IonCard>

        

      </IonContent>
    </IonPage>
  );
};

export default ClienteList;
