import { ListadoComponent } from './listado/listado.component';
import { AltaComponent }    from './alta/alta.component';
import { DeleteComponent }  from './delete/delete.component';
import { EditarComponent }  from './editar/editar.component';

export const routes_articulos = [
    { path: 'listado',                      component: ListadoComponent },
    { path: 'listado/:mensaje/:status',     component: ListadoComponent },
    { path: 'alta',                         component: AltaComponent    },
    { path: 'delete/:id',                   component: DeleteComponent  },
    { path: 'editar/:id',                   component: EditarComponent  },
    { path: '**',                           component: ListadoComponent },
]