import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DenemeComponent} from "./workspace/deneme/deneme.component";
import {authGuard} from "../../core/guards/auth/auth.guard";
import {PageNotFoundComponent} from "../../shared/components/error/page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'main',
    children: [
      {
        path: 'workspace',
        component: DenemeComponent,
        canActivate: [authGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
