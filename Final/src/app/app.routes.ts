import { Routes } from '@angular/router';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { AboutComponent } from './Pages/about/about.component';
import { AppointmentComponent } from './Pages/API/appointment/appointment.component';
import { UpdateComponent } from './Pages/API/update/update.component';
import { ReadComponent } from './Pages/API/read/read.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'department', component:DepartmentComponent},
    {path:'about', component:AboutComponent},
    {path:'read', component:ReadComponent},
   
 
    {
        path: 'appointment/create',
        loadComponent: () =>
            import('./Pages/API/appointment/appointment.component').then((x) => x.AppointmentComponent),
    },
    
    {
        path: 'appointment/edit/:id',
        loadComponent: () =>
            import('./Pages/API/update/update.component').then((x) => UpdateComponent),
    },
];
