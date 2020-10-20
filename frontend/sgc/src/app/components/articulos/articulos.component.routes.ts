import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';

export const routes_articulos = [
    { path: 'listado', component: ListadoComponent },
    { path: 'alta', component: AltaComponent },
    { path: '**', component: ListadoComponent },
]