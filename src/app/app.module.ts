import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThfModule } from '@totvs/thf-ui';
import { TabelasService } from './services/tabelas.service';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ThfModule
  ],
  providers: [TabelasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
