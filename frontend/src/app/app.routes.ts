import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Inicio'
    },

    {
        path:'user-form/:id',
        component:UserFormComponent,
        title:'Formulario'
    },

    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
