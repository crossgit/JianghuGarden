import { Component, OnInit ,HostBinding,trigger,transition,animate,style,state} from '@angular/core';
@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css'],
  animations:[trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])], 
})
export class TownComponent implements OnInit {
@HostBinding('@routeAnimation')get routeAnimation(){
  return true;
}
@HostBinding('style.display')get display(){
  return 'block';
}
// @HostBinding('style.position')get position(){
//   return 'absolute';
// }
  constructor() { }

  ngOnInit() {
  }

}
