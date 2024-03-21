import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { LignePanier } from '../../models/Panier';
import { Boxes } from '../../models/Boxes';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  private orderNumber: number = 0;
  monPanier: Array<LignePanier> = []

  constructor(private panierService: PanierService, ) {
    this.monPanier = this.panierService.getPanier()
  }
  total() {
    return this.panierService.calculateTotal()
  }
  ajout(box: Boxes) {
    this.panierService.addPanier(box, 1)
  }
  retrait(box: Boxes) {
    this.panierService.minusPanier(box, 1)
  }
  Poubelle(Poubelle: any) {
    const index = this.monPanier.findIndex(panier => panier == Poubelle);
    if (index !== -1) {
      this.monPanier.splice(index, 1);
    }
  }
  // NumCommande(): number {
  //   return Math.floor(Math.random( ) * (999999999 - 111111111 + 1))+ 111111111;
  // }
  historique() {
   
    this.panierService.ajouterhistorique(this.monPanier)
    localStorage.setItem("panier","[]")
    this.monPanier = [];
  }
  reload(){
    location.reload()
  }
    
  


}

