import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { Cal } from './cal/cal';
import { authGuard } from './auth-guard';

export const routes: Routes = [

    {path:"",component:Landingpage},
    {
path:"formulapage",component:Cal,canActivate: [authGuard]
    },
    { path: '**', redirectTo: '' }
];
