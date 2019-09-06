import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { OverlayComponent } from './overlay/overlay.component';
import { StartingComponent } from './starting/starting.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    OverlayComponent,
    StartingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
