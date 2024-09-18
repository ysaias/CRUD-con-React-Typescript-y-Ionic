import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import ClienteList from './pages/cliente/ClienteList';
import ClienteEdit from './pages/cliente/ClienteEdit';
import ProveedorList from './pages/proveedor/ProveedorList';
import ProveedorEdit from './pages/proveedor/ProveedorEdit';
import EmpleadoList from './pages/empleado/EmpleadoList';
import EmpleadoEdit from './pages/empleado/EmpleadoEdit';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/clientes" />
            </Route>
            <Route path="/folder/clientes" exact={true}>
              <ClienteList/>
            </Route>
            <Route path="/folder/cliente/:id" exact={true}>
              <ClienteEdit/>
            </Route>
            <Route path="/folder/empleados" exact={true}>
              <EmpleadoList/>
            </Route>
            <Route path="/folder/empleado/:id" exact={true}>
              <EmpleadoEdit/>
            </Route>
            <Route path="/folder/proveedores" exact={true}>
              <ProveedorList/>
            </Route>
            <Route path="/folder/proveedor/:id" exact={true}>
              <ProveedorEdit/>
            </Route>
          
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
