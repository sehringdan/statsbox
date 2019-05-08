import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StatsboxMainpageHeaderComponent} from './statsbox-mainpage-header/statsbox-mainpage-header/statsbox-mainpage-header.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsboxMainpageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
