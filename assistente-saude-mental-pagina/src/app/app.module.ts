import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjudaOnlineComponent } from './ajuda-online/ajuda-online.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaZenComponent } from './area-zen/area-zen.component';
import { ButtonBrainlyComponent } from './button-brainly/button-brainly.component';
import { CardOpcaoProfissionalComponent } from './card-opcao-profissional/card-opcao-profissional.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { InputBrainlyComponent } from './input-brainly/input-brainly.component';
import { MenuEsquerdoComponent } from './menu-esquerdo/menu-esquerdo.component';
import { MetasDiariasComponent } from './metas-diarias/metas-diarias.component';
import { NoveMandamentosSaudeMentalComponent } from './nove-mandamentos-saude-mental/nove-mandamentos-saude-mental.component';
import { SeuAcompanhamentoComponent } from './seu-acompanhamento/seu-acompanhamento.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuEsquerdoComponent,
    CardsComponent,
    NoveMandamentosSaudeMentalComponent,
    MetasDiariasComponent,
    HomeComponent,
    InputBrainlyComponent,
    ButtonBrainlyComponent,
    AreaZenComponent,
    SeuAcompanhamentoComponent,
    CardOpcaoProfissionalComponent,
    AjudaOnlineComponent,
  ],
   imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
