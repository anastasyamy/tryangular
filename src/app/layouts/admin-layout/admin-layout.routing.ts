import { Routes } from '@angular/router';

import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { ListUserComponent } from '../../components/list-user/list-user.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'create',
    //     component: CreateUserComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'list-users',
    //   component: ListUserComponent
    // }]
    // }, 
    { path: 'create', component: CreateUserComponent },
    { path: 'list-users', component: ListUserComponent },
];
