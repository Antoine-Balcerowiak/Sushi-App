import { Injectable } from '@angular/core';

import { Boxes } from '../models/Boxes';
import { LignePanier } from '../models/Panier';

@Injectable({
  providedIn: 'root'
})

export class PanierService {
  monPanier: Array<LignePanier> = []
  historiqueCommandes: any = [];

  constructor() {
    this.monPanier = JSON.parse(localStorage.getItem("panier") ?? "[]")
    this.historiqueCommandes = JSON.parse(localStorage.getItem("historique") ?? "[]")

  }


  addPanier(boxes: Boxes, quantite: number) {
    let panier = new LignePanier(boxes, quantite)
    for (let box of this.monPanier) {
      if (box.boxes.id == panier.boxes.id) {
        box.quantite++
        localStorage.setItem('panier', JSON.stringify(this.monPanier))
        return
      }
    }
    this.monPanier.push(panier)
    localStorage.setItem('panier', JSON.stringify(this.monPanier))
  }

  minusPanier(boxes: Boxes, quantite: number) {
    let panier = new LignePanier(boxes, quantite);
    for (let i = 0; i < this.monPanier.length; i++) {
      let box = this.monPanier[i];
      if (box.boxes.id == panier.boxes.id) {
        if (box.quantite > 0) {
          box.quantite--;
          if (box.quantite == 0) {
            this.monPanier.splice(i, 1);
          }
          localStorage.setItem('panier', JSON.stringify(this.monPanier));
          return;
        }
      }
    }
  }

  getPanier() {
    return this.monPanier
  }

  clearPanier() {
    localStorage.setItem("panier","[]")
    this.monPanier = [];
  }
  calculateTotal(): number {
    let total = 0;
    for (let panier of this.monPanier) {
      total += panier.boxes.prix * panier.quantite;
    }
    return total;
  }

  ajouterhistorique(panier: Array<LignePanier>) {
    this.historiqueCommandes.push(panier);
    localStorage.setItem('historique', JSON.stringify(this.historiqueCommandes));
  }
  gethsitorique(){
    return this.historiqueCommandes
  }
}
