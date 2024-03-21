import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private panierService:PanierService  ){}

  annuler(){
  this.panierService.clearPanier()
  }
   
  total(){
    return this.panierService.calculateTotal()
  }
  reload(){
    location.reload()
  }

}
