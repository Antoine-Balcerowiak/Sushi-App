import { Boxes } from "./Boxes";
import { iPanier } from "./iPanier"

export class LignePanier implements iPanier {
    constructor(
        public boxes:Boxes,
        public quantite:number
        ){}
    
    
    }