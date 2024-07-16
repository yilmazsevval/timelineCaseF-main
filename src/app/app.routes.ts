import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddWorkHourComponent } from './component/add-work-hour/add-work-hour.component';
import { loginGuard } from './core/guard/login.guard';
import { StatisticComponent } from './component/statistic/statistic.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'add-work-hour', component: AddWorkHourComponent, canActivate: [loginGuard]},
    { path: 'statistic', component: StatisticComponent, canActivate: [loginGuard] },
];
