import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetasDiariasComponent } from './metas-diarias/metas-diarias.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaZenComponent } from './area-zen/area-zen.component';
import { SeuAcompanhamentoComponent } from './seu-acompanhamento/seu-acompanhamento.component';
import { AjudaOnlineComponent } from './ajuda-online/ajuda-online.component';

const routes: Routes = [
  {path: 'metas-diarias',  component: MetasDiariasComponent, },
  {path: 'home', component: HomeComponent},
  {path: 'area-zen', component: AreaZenComponent},
  {path: 'seu-acompanhamento', component: SeuAcompanhamentoComponent},
  {path: 'ajuda-online', component: AjudaOnlineComponent},
  {path: '', component: HomeComponent}

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
