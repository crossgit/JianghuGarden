
// export  class Hero {
//     id: number; 
//     name: string;
//     gender:number;
//     age:number;
//     character:string;
//     houseId:number;
//     introduction:string;

//     // constructor() { }
// }


export class Hero {


    constructor(
        public id: number,
        public name: string,
        public gender: number,
        public age: number,
        public character: string,
        public houseId: number,
        public introduction: string
    ) { }
}