import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../models/Hero';
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

  myArry1 =new Range();
  
  myArry=_.range(4);
  errorMessage: string;
  oneHero:Hero;
  heros: Hero[];
  houseList: House[];
  constructor(
    private router: Router,
    private heroServcies: HeroServcies
  ) { }

  ngOnInit() {
    this.getHeroList(); //测试
    this.getAll();
    this.getOneHero(2);
  }
  getOneHero(id: number) {
    this.heroServcies.getOneHero(id)
      .subscribe(
      res => this.oneHero = res,
      error => this.errorMessage = <any>error
      );
  }
  getHeroList() {
    this.heroServcies.getHeros()
      .subscribe(
      res => {
        this.heros = res;
        console.log(this.heros);
      },
      error => this.errorMessage = <any>error);
  }

  getAll() {
    this.heroServcies.getAll()
      .subscribe(
      res => {
        let _heros = res[0];
        let _house = res[1];
        _.forEach(_house, function (self: House) {
          let pro: any = _.filter(_heros, function (val: Hero) { return val.houseId == self.id });
          self.heroDetail = pro;
        })
        this.houseList = _house
      })
  }
}
