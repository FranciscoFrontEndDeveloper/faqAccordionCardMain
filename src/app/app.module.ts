import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AccordioncontainerComponent } from './components/accordioncontainer/accordioncontainer.component';
import { AccordionelementComponent } from './components/accordionelement/accordionelement.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccordioncontainerComponent,
    AccordionelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
