import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { VisitanteComponent } from './components/visitante/visitante.component';
import { RegistrarAsistenciaComponent } from './components/registrar-asistencia/registrar-asistencia.component';
import { LocalizarAulaComponent } from './components/localizar-aula/localizar-aula.component';

const routes: Routes = [
    { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: 'inicio-sesion', component: InicioSesionComponent},
    { path: 'estudiante', component: EstudianteComponent },
    { path: 'docente', component: DocenteComponent },
    { path: 'administrativo', component: AdministrativoComponent },
    { path: 'visitante', component: VisitanteComponent},
    { path: 'registrar-asistencia', component: RegistrarAsistenciaComponent},
    { path: 'reservar-espacio', component: RegistrarAsistenciaComponent},
    { path: 'localizar-aula', component: LocalizarAulaComponent}
];

export { routes };
