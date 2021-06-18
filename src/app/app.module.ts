import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StronaglownaComponent } from './stronaglowna/stronaglowna/stronaglowna.component';
import { CennikComponent } from './cennik/cennik/cennik.component';
import { KonaktComponent } from './kontakt/konakt/konakt.component';
import { GaleriaComponent } from './galeria/galeria/galeria.component';
import { InformacjeComponent } from './informacje/informacje/informacje.component';


@NgModule({
  declarations: [
    AppComponent,
    StronaglownaComponent,
    CennikComponent,
    KonaktComponent,
    GaleriaComponent,
    InformacjeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
