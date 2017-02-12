import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { YamenComponent } from './yamen.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: YamenComponent }
    ])
  ],
  declarations: [YamenComponent]
})
export class YamenModule { }
