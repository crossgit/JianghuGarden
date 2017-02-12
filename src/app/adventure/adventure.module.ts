import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AdventureComponent } from './adventure.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: AdventureComponent }
    ])
  ],
  declarations: [AdventureComponent]
})
export class AdventureModule { }
