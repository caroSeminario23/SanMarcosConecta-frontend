import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';

const routes: Routes = [
    { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: 'inicio-sesion', component: InicioSesionComponent},
    { path: 'estudiante', component: EstudianteComponent },
    { path: 'docente', component: DocenteComponent },
    { path: 'administrativo', component: AdministrativoComponent },
];

export { routes };
