import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCaseConverterComponent } from './components/upper-case-converter/upper-case-converter.component';
import {HttpClientModule} from '@angular/common/http';
import {UpperCaseConverterService} from './services/upper-case-converter.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

    ],
  providers: [UpperCaseConverterService],
  bootstrap: [UpperCaseConverterComponent]
})
export class AppModule { }
