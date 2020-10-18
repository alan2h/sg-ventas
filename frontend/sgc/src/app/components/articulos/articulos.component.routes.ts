import { ListadoComponent } from './listado/listado.component';

export const routes_articulos = [
    { path: 'listado', component: ListadoComponent },
    { path: '**', component: ListadoComponent },
]