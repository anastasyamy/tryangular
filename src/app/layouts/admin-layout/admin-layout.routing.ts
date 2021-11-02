import { Routes } from '@angular/router';

import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { ListUserComponent } from '../../components/list-user/list-user.component';
import { EditUserComponent } from '../../components/edit-user/edit-user.component';

import { CreatePakaianComponent } from '../../components/create-pakaian/create-pakaian.component';
import { ListPakaianComponent } from '../../components/list-pakaian/list-pakaian.component';
import { EditPakaianComponent } from '../../components/edit-pakaian/edit-pakaian.component';


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
    // {
    //   path: '',
    //   children: [ {
    //     path: 'create-pakaian',
    //     component: CreatePakaianComponent
    // }]},
    // {
    //   path: '',
    //   children: [ {
    //     path: 'list-pakaian',
    //     component: ListPakaianComponent
    // }]},
    { path: 'create', component: CreateUserComponent },
    { path: 'list-users', component: ListUserComponent },
    { path: 'update-user/:id', component: EditUserComponent }, 
    { path: 'create-pakaian', component: CreatePakaianComponent},
    { path: 'list-pakaian', component: ListPakaianComponent},
    { path: 'update-pakaian/:id', component: EditPakaianComponent}

];
