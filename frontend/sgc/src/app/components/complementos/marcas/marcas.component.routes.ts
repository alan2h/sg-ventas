import { ListadoMarcasComponent } from './listado-marcas/listado-marcas.component';

export const routes_marcas = [
    { path: 'listado', component: ListadoMarcasComponent },
    { path: '**'     , component: ListadoMarcasComponent }
]