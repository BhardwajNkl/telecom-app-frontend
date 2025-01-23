import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { NewConnectionRequestPageComponent } from './pages/new-connection-request-page/new-connection-request-page.component';
import { ProceedWithOrderPageComponent } from './pages/proceed-with-order-page/proceed-with-order-page.component';
import { ChangePlanPageComponent } from './pages/change-plan-page/change-plan-page.component';
import { RaiseComplaintPageComponent } from './pages/raise-complaint-page/raise-complaint-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:LandingPageComponent
  },
  {
    path:"new-connection-request",
    pathMatch:"full",
    component:NewConnectionRequestPageComponent
  },
  {
    path:"proceed-with-order",
    pathMatch:"full",
    component:ProceedWithOrderPageComponent
  },
  {
    path:"change-plan",
    pathMatch:"full",
    component:ChangePlanPageComponent
  },
  {
    path:"raise-complaint",
    pathMatch:"full",
    component:RaiseComplaintPageComponent
  },
  {
    path:"test",
    pathMatch:"full",
    component:TestPageComponent
  },
  {
    path:"**",
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
