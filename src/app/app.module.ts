import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { ColorPipe } from './shared/color.pipe';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LedService } from './shared/led.service';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    ColorFormComponent,
    ColorPipe,
    DetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
