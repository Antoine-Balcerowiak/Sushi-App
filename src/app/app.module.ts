import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './component/detail/detail.component';
import { PanierComponent } from './component/panier/panier.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { HistoriqueComponent } from './component/historique/historique.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DetailComponent,
    PanierComponent,
    RgpdComponent,
    HistoriqueComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
