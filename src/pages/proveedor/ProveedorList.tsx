import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeProveedor, searchProveedor } from './ProveedorApi';
import Proveedor from './Proveedor';


const ProveedorList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const history = useHistory();


    useEffect( () =>{
        search();
    }, [history.location.pathname]);


  const search = async () =>{
        let result = await searchProveedor();
        setProveedores(result);
  }



  const remove = async (id: string) =>{
    await removeProveedor(id);
    search();
  }

  const agregarProveedor = () =>{
    history.push('proveedor/new');
  }

  const editProveedor = (id:string) =>{
    history.push('proveedor/'+ id);
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
            <IonTitle>Gestion de Proveedores</IonTitle>
        
        <IonItem>
            <IonButton onClick={agregarProveedor} color="primary" fill="solid" slot='end' size='default'>
              <IonIcon icon={add} />  AGREGAR CLIENTE
            </IonButton>
        </IonItem>
        
        <IonGrid className='table'>
  
        <IonRow>
          <IonCol>Nombre </IonCol>
          <IonCol>Email</IonCol>
          <IonCol>Teléfono</IonCol>
          <IonCol>Dirección</IonCol>
          <IonCol>Web</IonCol>
          <IonCol>Contacto</IonCol>
          <IonCol>Acciones</IonCol>
        </IonRow>

        {proveedores.map((proveedor:Proveedor)=> 
        
        <IonRow>
          <IonCol>{proveedor.nombre} </IonCol>
          <IonCol>{proveedor.email}</IonCol>
          <IonCol>{proveedor.telefono}</IonCol>
          <IonCol>{proveedor.direccion}</IonCol>
          <IonCol>{proveedor.web}</IonCol>
          <IonCol>{proveedor.contacto}</IonCol>
          <IonCol>
            <IonButton color="primary" fill='clear'
              onClick={() => editProveedor(String(proveedor.id))}>
                <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
            <IonButton  color="danger" fill='clear'
              onClick={() => remove(String(proveedor.id))}>
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

export default ProveedorList;
