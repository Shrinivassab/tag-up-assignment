import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLogComponent } from './dashboard/new-log/new-log.component';
import { SubmittedLogComponent } from './dashboard/submitted-log/submitted-log.component';
import { CardModule } from 'primeng/card';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataViewModule} from "primeng/dataview";
import {MomentModule} from "ngx-moment";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    NewLogComponent,
    SubmittedLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    PanelModule,
    BrowserAnimationsModule,
    DataViewModule,
    MomentModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
