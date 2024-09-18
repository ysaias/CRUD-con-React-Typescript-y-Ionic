import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveProveedor, searchProveedorById } from './ProveedorApi';
import Proveedor from './Proveedor';


const ProveedorEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const [proveedor, setProveedor] = useState<Proveedor>({});
  const history = useHistory();
  
    useEffect( () =>{
        search();
    }, []);

  const search = async () =>{

    if(id === 'new'){
    
      setProveedor({});

    }else{
      
      let result = await searchProveedorById(id);
      setProveedor(result);

    }
        
  }

  const save = async () =>{

    await saveProveedor(proveedor);
    history.push('/folder/proveedores');

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
            <IonTitle className='tituloEncabezado'>{id=== 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>
        
       
        
        <IonRow>
          <IonCol> 
            <IonInput label="Nombre" labelPlacement="floating" 
                      fill="outline" placeholder="Nombre" 
                      onIonChange={e => proveedor.nombre = String(e.detail.value)} value={proveedor.nombre}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Teléfon" labelPlacement="floating" 
                      fill="outline" placeholder="Teléfono" 
                      onIonChange={e => proveedor.telefono = String(e.detail.value)} value={proveedor.telefono}></IonInput>
          </IonCol>
        </IonRow>
      
        <IonRow>
          <IonCol>
            <IonInput label="Email" labelPlacement="floating" 
                      fill="outline" placeholder="Email" 
                      onIonChange={e => proveedor.email = String(e.detail.value)} value={proveedor.email}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Dirección" labelPlacement="floating" 
                      fill="outline" placeholder="Dirección" 
                      onIonChange={e => proveedor.direccion = String(e.detail.value)} value={proveedor.direccion}></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput label="Web" labelPlacement="floating" 
                      fill="outline" placeholder="Web"  
                      onIonChange={e => proveedor.web = String(e.detail.value)} value={proveedor.web}></IonInput>
          </IonCol>
          <IonCol>
          <IonInput label="Contacto" labelPlacement="floating" 
                      fill="outline" placeholder="Contacto"  
                      onIonChange={e => proveedor.contacto = String(e.detail.value)} value={proveedor.contacto}></IonInput>  
          </IonCol>    
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

export default ProveedorEdit;
