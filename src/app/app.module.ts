import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NewConnectionRequestPageComponent } from './pages/new-connection-request-page/new-connection-request-page.component';
import { ProceedWithOrderPageComponent } from './pages/proceed-with-order-page/proceed-with-order-page.component';
import { ChangePlanPageComponent } from './pages/change-plan-page/change-plan-page.component';
import { RaiseComplaintPageComponent } from './pages/raise-complaint-page/raise-complaint-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestPageComponent,
    NewConnectionRequestPageComponent,
    ProceedWithOrderPageComponent,
    ChangePlanPageComponent,
    ChangePlanPageComponent,
    RaiseComplaintPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
