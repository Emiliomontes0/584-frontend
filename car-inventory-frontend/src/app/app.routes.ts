import { Routes } from '@angular/router';
import { CarMakeListComponent } from './components/car-make-list/car-make-list.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ModelsComponent } from './model/model.component';
export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'makes', component: CarMakeListComponent },
    { path: 'models', component: ModelsComponent },
];
