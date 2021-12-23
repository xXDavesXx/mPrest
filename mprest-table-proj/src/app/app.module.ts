import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewLineComponent } from './components/new-line/new-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableLineComponent,
    NewLineComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
