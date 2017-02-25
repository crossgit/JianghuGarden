import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs'
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AdventureComponent } from './adventure/adventure.component';
// import { TownComponent } from './town/town.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'garden', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'yamen', loadChildren: './yamen/yamen.module#YamenModule' },
  { path: 'garden', loadChildren: './garden/garden.module#GardenModule' },
  { path: 'town', loadChildren: './town/town.module#TownModule' },
  { path: 'adventure', loadChildren: './adventure/adventure.module#AdventureModule' },
];
@NgModule({
  declarations: [
    AppComponent, 
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
