import { ListadoMarcasComponent } from './listado-marcas/listado-marcas.component';
import { AltaMarcaComponent } from './alta-marca/alta-marca.component';

export const routes_marcas = [
    { path: 'listado', component: ListadoMarcasComponent },
    { path: 'alta'   , component: AltaMarcaComponent     },
    { path: '**'     , component: ListadoMarcasComponent }
]