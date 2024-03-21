import { iBoxes } from "./iBoxes";

export class Boxes implements iBoxes {
    constructor(
    public id:number,
    public pieces:number,
    public nom:string,
    public image:string,
    public prix:number,
    public saveur:Array<string>,
    public aliments:Array<Iterable<string>>){}
    
    }
    