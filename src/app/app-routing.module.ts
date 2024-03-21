import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { DetailComponent } from './component/detail/detail.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PanierComponent } from './component/panier/panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';

const routes: Routes = [
{path: 'menu', component: MenuComponent},
{path:'detail/:id',component: DetailComponent},
{path:'rgpd',component:RgpdComponent},
{path:'panier',component:PanierComponent},
{path:'historique',component:HistoriqueComponent}


];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }