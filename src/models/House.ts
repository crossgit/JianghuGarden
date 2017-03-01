import { Hero } from './Hero';
export  class House {
    id: number; 
    code:string;
    name: string;
    capacity:number; 
    character:string; 
    introduction:string;
    heroDetail:Hero[];
    constructor() { }
}