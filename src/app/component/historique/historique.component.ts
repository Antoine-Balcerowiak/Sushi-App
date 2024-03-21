import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { LignePanier } from '../../models/Panier';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  historiqueCommandes: any 

  constructor(private paneirService: PanierService) { }

  ngOnInit(): void {
    
    this.historiqueCommandes = this.paneirService.gethsitorique()
  }
  PrixTotalCommande(commande: Array<LignePanier>): number {
    let prixTotal = 0;
    for (let item of commande) {
      prixTotal += item.boxes.prix * item.quantite;
    }
    return prixTotal;
  }
}
