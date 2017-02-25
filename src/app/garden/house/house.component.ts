import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../models/hero';
import { House } from '../../../models/House';
import { HeroServcies } from './services/heros.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [HeroServcies],
})
export class HouseComponent implements OnInit {

  errorMessage: string;
  heros: Hero[];
  houseList: House[];
  constructor(
    private router: Router,
    private heroServcies: HeroServcies
  ) { }

  ngOnInit() {
    //  this.getHeroList();
    this.getAll();
  }

  getHeroList() {
    this.heroServcies.getHeros()
      .subscribe(
      res => this.heros = res,
      error => this.errorMessage = <any>error);
  }

  getAll() {
    this.heroServcies.getAll()
      .subscribe(
      res => {
        let _heros = res[0];
        let _house = res[1];
        _.forEach(_house, function (self: House) {
          let pro:any = _.filter(_heros, function (val: Hero) {return  val.houseId == self.id }); 
          self.heroDetail = pro;
        }) 
        this.houseList = _house
      })
  }
}
