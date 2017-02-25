 import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import {Hero} from './services/hero';
import {HeroServcies} from './services/heros.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers:[HeroServcies],
})
export class HouseComponent implements OnInit {
 
  errorMessage: string;
  heros: Hero[];
  constructor(
        private router: Router,
        private heroServcies: HeroServcies
        ) { }

  ngOnInit() {
     this.getOrdersList();
  }

    getOrdersList() {
        this.heroServcies.query()
            .subscribe(
            res => this.heros = res,
            error => this.errorMessage = <any>error);
    }

}
