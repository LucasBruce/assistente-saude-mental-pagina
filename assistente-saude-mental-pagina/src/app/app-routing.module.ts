import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AjudaOnlineComponent } from './ajuda-online/ajuda-online.component';
import { AreaZenComponent } from './area-zen/area-zen.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MetasDiariasComponent } from './metas-diarias/metas-diarias.component';
import { SeuAcompanhamentoComponent } from './seu-acompanhamento/seu-acompanhamento.component';

const routes: Routes = [
  {path: 'metas-diarias',  component: MetasDiariasComponent, },
  {path: 'home', component: HomeComponent},
  {path: 'area-zen', component: AreaZenComponent},
  {path: 'seu-acompanhamento', component: SeuAcompanhamentoComponent},
  {path: 'ajuda-online', component: AjudaOnlineComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
