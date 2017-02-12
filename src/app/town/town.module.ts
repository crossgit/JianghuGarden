import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { TownComponent } from './town.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: TownComponent
      }
    ])
  ],
  declarations: [TownComponent]
})
export class TownModule { }
