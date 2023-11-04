import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';

import { FormSearchComponent } from './components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from './components/cep/cep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListModule } from 'primeng/orderlist';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormSearchComponent,
    CepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    OrderListModule,
    InputMaskModule,
    HttpClientModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
