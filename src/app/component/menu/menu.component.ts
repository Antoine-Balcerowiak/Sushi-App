import { Component, OnInit } from '@angular/core';
import { LookupboxesService } from '../../service/lookupboxes.service';
import { Boxes } from '../../models/Boxes';
import { PanierService } from '../../service/panier.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  boxes:any[]=[];
  

 

  constructor(private lookupBoxes:LookupboxesService,private panierService:PanierService){}

  ngOnInit(): void {
    this.lookupBoxes.getBoxes().subscribe((data)=>{
      this.boxes = data;

    })
  }
  localStorage(box:Boxes):void{
  this.panierService.addPanier(box,1)


  }

}
