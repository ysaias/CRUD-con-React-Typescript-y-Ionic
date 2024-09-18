import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmpleado, searchEmpleado } from './EmpleadoApi';

import Empleado from './Empleado';


const EmpleadoList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [empleados, setempleados] = useState<Empleado[]>([]);
  const history = useHistory();


    useEffect( () =>{
        search();
    }, [history.location.pathname]);


  const search = async () =>{
        let result = await searchEmpleado();
        setempleados(result);
  }



  const remove = async (id: string) =>{
    await removeEmpleado(id);
    search();
  }

  const agregarempleado = () =>{
    
    history.push('empleado/new');
  }

  const editempleado = (id:string) =>{
    history.push('empleado/'+ id);
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
            <IonTitle>Gestion de Empleados</IonTitle>
        
        <IonItem>
            <IonButton onClick={agregarempleado} color="primary" fill="solid" slot='end' size='default'>
              <IonIcon icon={add} />  AGREGAR empleado
            </IonButton>
        </IonItem>
        
        <IonGrid className='table'>
  
        <IonRow>
          <IonCol>Nombre </IonCol>
          <IonCol>Email</IonCol>
          <IonCol>Teléfono</IonCol>
          <IonCol>Dirección</IonCol>
          <IonCol>Salario</IonCol>
          <IonCol>Acciones</IonCol>
          
        </IonRow>

        {empleados.map((empleado:Empleado)=> 
        
        <IonRow>
          <IonCol>{empleado.nombre} {empleado.apellido}</IonCol>
          <IonCol>{empleado.email}</IonCol>
          <IonCol>{empleado.telefono}</IonCol>
          <IonCol>{empleado.direccion}</IonCol>
          <IonCol>{empleado.salario}</IonCol>
          <IonCol>
            <IonButton color="primary" fill='clear'
              onClick={() => editempleado(String(empleado.id))}>
                <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
            <IonButton  color="danger" fill='clear'
              onClick={() => remove(String(empleado.id))}>
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

export default EmpleadoList;
