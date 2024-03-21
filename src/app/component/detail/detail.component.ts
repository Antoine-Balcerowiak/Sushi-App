import { Component, OnInit } from '@angular/core';
import { LookupboxesService } from '../../service/lookupboxes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  boxes:any[]=[];
  objetId: string = '';


  
 
  constructor(private lookupBoxes:LookupboxesService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.lookupBoxes.getBoxes().subscribe((data)=>{
      this.boxes = data;

    })
    this.route.params.subscribe(params => {
      this.objetId = params['id'];
    
    });
    
  }
  

}