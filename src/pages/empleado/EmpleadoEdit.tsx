import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveEmpleado, searchEmpleadoById } from './EmpleadoApi';
import Empleado from './Empleado';


const EmpleadoEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const [empleado, setEmpleado] = useState<Empleado>({});
  const history = useHistory();
  
    useEffect( () =>{
        search();
    }, []);

  const  search = async () =>{

    if(id === 'new'){

      setEmpleado({});

    }else{
     
      let result = await searchEmpleadoById(id);
      setEmpleado(result);

    }
        
  }

  const save = async () =>{

    await saveEmpleado(empleado);
    history.push('/folder/empleados');

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
            <IonTitle className='tituloEncabezado'>{id=== 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>
        
       
        
        <IonRow>
          <IonCol> 
            <IonInput label="Nombre" labelPlacement="floating" 
                      fill="outline" placeholder="Nombre" 
                      onIonChange={e => empleado.nombre = String(e.detail.value)} value={empleado.nombre}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Apellido" labelPlacement="floating" 
                      fill="outline" placeholder="Apellido" 
                      onIonChange={e => empleado.apellido = String(e.detail.value)} value={empleado.apellido}></IonInput>
          </IonCol>
        </IonRow>
      
        <IonRow>
          <IonCol>
            <IonInput label="Email" labelPlacement="floating" 
                      fill="outline" placeholder="Email" 
                      onIonChange={e => empleado.email = String(e.detail.value)} value={empleado.email}></IonInput>
          </IonCol>
          <IonCol>
            <IonInput label="Telélfono" labelPlacement="floating" 
                      fill="outline" placeholder="Teléfono" 
                      onIonChange={e => empleado.telefono = String(e.detail.value)} value={empleado.telefono}></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput label="Dirección" labelPlacement="floating" 
                      fill="outline" placeholder="Dirección"  
                      onIonChange={e => empleado.direccion = String(e.detail.value)} value={empleado.direccion}></IonInput>
          </IonCol>
          <IonCol>
          <IonInput label="Salario" labelPlacement="floating" 
                      fill="outline" placeholder="Salario"  
                      onIonChange={e => empleado.salario = Number(e.detail.value)} value={empleado.salario}></IonInput>  
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

export default EmpleadoEdit;
