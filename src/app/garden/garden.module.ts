import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { MaterialModule } from '@angular/material';
import { GardenComponent } from './garden.component';
import { HillComponent } from './hill/hill.component';
import { HouseComponent } from './house/house.component';
import { PracticeComponent } from './practice/practice.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: GardenComponent, children: [
          { path: 'hill', component: HillComponent },
          { path: 'house', component: HouseComponent },
          { path: 'practice', component: PracticeComponent },
          { path: 'study', component: StudyComponent }
        ]
      }
    ])
  ],
  declarations: [
    GardenComponent,
    HillComponent,
    HouseComponent,
    PracticeComponent,
    StudyComponent
  ]
})
export class GardenModule { }
